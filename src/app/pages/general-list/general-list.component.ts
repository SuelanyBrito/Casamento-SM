import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { BackService } from 'src/app/services/backService';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DialogComponent } from 'src/app/sharepage/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

interface Item {
  id: string;
  title: string;
  number: number;
  check: boolean;
}

interface SelectedItem {
  item: Item;
  quantity: number;
}

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public list!: MatTableDataSource<Item>;
  public selectedItems: SelectedItem[] = [];

  form: FormGroup;
  qtde_temp: number = 0;
  invalid_submit = true;

  constructor(private fb: FormBuilder, private backService: BackService, private router: Router, public dialog: MatDialog) {
    this.form = this.fb.group({
      name_user: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadList();
  }

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
    this.list.sort = this.sort;
  }

  onSelectItem(item: any, event: MatCheckboxChange) {
    if (event.checked) {
      this.selectedItems.push({ item, quantity: this.qtde_temp });
    } else {
      this.selectedItems = this.selectedItems.filter(selected => selected.item !== item);
    }
    console.log(this.selectedItems)

  }

  onQuantityChange(item: Item, event: MatSelectChange): void {
    const quantity = event.value;
    const selectedItem = this.selectedItems.find(selectedItem => selectedItem.item.id === item.id);

    if (selectedItem) {
      selectedItem.quantity = quantity;
      console.log(`Quantidade atualizada para ${selectedItem.item.title}: ${selectedItem.quantity}`);
    }
  }

  getQuantityOptions(max: number): number[] {
    return Array.from({ length: max }, (_, i) => i + 1);
  }

  enviar() {
    if (this.form.invalid || this.selectedItems.length === 0) {
      this.openDialog();
    }else{
      const itemInitial: Item = {
        id: '',
        title: '',
        number: 0,
        check: false
      };

      const selected: SelectedItem = {
        item: itemInitial,
        quantity: 0
      }
      this.backService.update(selected, '')
      this.selectedItems.map(itemX =>
        this.backService.update(itemX, this.form.get('name_user')?.value)
      );
      this.router.navigate(['/thanks']);
    }
  }

  loadList() {
    this.backService.getList().subscribe((data: Item[]) => {
      this.list = new MatTableDataSource<Item>(data);
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
      this.list.sortingDataAccessor = (item, property) => {
        switch (property) {
          case 'title': return item.title;
          case 'number': return item.number;
          case 'id': return item.id;
          case 'check': return item.check ? 1 : 0;
          default: return '';
        }
      };

      this.sort.active = 'title';
      this.sort.direction = 'asc';
      this.list.sort = this.sort;
    });
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }
}
