import { Component, OnInit } from '@angular/core';
import { BackService } from 'src/app/services/backService';
import { Observable } from "rxjs";

interface Item {
  id: string;
  title: string;
  number: number;
  check: boolean;
}

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit {
  public list$!: Observable<Item[]>;

  constructor(private backService: BackService) { }

  ngOnInit(): void {
    this.list$ = this.backService.getList();
  }
}
