import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/list.json';
import { BackService } from 'src/app/services/backService';

@Component({
  selector: 'app-general-list',
  templateUrl: './general-list.component.html',
  styleUrls: ['./general-list.component.scss']
})
export class GeneralListComponent implements OnInit {
  public list: any[] = [];
  private intervalId: any;

  constructor(private backService: BackService) { }

  ngOnInit(): void {
    this.backService.getList();
    this.list = data.names;
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    try {
      const data = await this.backService.getList();
      console.log('Data received:', data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Chama a função novamente após 20 segundos
      this.intervalId = setTimeout(() => this.fetchData(), 20000);
    }

}
}