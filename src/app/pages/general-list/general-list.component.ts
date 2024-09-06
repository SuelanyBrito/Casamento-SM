import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { BackService } from 'src/app/services/backService';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import {MatFormFieldControl} from "@angular/material/form-field";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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
  formSubmitted = false;

  constructor(private fb: FormBuilder, private backService: BackService, private router: Router) {
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
    if (this.form.invalid) {
      return; // Interrompe o envio se o formulário for inválido
    }
    this.formSubmitted = true;
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

  loadList() {
    this.backService.getList().subscribe((data: Item[]) => {
      this.list = new MatTableDataSource<Item>(data);
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    });
  }

}
