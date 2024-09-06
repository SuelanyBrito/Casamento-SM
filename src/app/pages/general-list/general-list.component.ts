import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { BackService } from 'src/app/services/backService';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

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

  name_usuario: string = "";
  qtde_temp: number = 0;

  constructor(private backService: BackService, private router: Router) { }

  ngOnInit(): void {
    this.loadList();
  }

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
    this.list.sort = this.sort;
  }

  nameUpdate(event: any) {
    this.name_usuario = event.target.value;
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
    const updateObservables = this.selectedItems.map(itemX => 
      this.backService.update(itemX, this.name_usuario)
    );
    this.router.navigate(['/']);    
  }

  loadList() {
    this.backService.getList().subscribe((data: Item[]) => {
      this.list = new MatTableDataSource<Item>(data);
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    });
  }
  
}
