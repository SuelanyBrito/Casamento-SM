import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/list.json';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit {
  public list: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.list = data.names;
  }

}
