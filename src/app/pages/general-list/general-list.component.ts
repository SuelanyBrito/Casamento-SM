import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { BackService } from 'src/app/services/backService';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

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

  constructor(private backService: BackService) { }

  ngOnInit(): void {
    this.backService.getList().subscribe((data: Item[]) => {
      this.list = new MatTableDataSource<Item>(data);
      this.list.paginator = this.paginator;
      this.list.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.list.paginator = this.paginator;
    this.list.sort = this.sort;
  }

  onSelectItem(item: Item, event: any): void {
    if (event.target.checked) {
      this.selectedItems.push({ item, quantity: 1 });
    } else {
      this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem.item.id !== item.id);
    }
  }

  onQuantityChange(item: Item, event: any): void {
    const quantity = +event.target.value; // Converte o valor para número
    const selectedItem = this.selectedItems.find(selectedItem => selectedItem.item.id === item.id);
    if (selectedItem) {
      selectedItem.quantity = quantity;
    }
  }

  getQuantityOptions(max: number): number[] {
    return Array.from({ length: max }, (_, i) => i + 1);
  }

}
