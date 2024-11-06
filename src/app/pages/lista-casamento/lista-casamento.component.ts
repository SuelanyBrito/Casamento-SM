import {Component, OnInit} from '@angular/core';
import {BackService} from "../../services/backService";

@Component({
  selector: 'app-lista-casamento',
  templateUrl: './lista-casamento.component.html',
  styleUrls: ['./lista-casamento.component.scss']
})
export class ListaCasamentoComponent implements OnInit {


  constructor(private backService: BackService){}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  copyPixKey() {
    this.backService.getPix().subscribe(data => {
      navigator.clipboard.writeText(data).then(() => {
        alert('Chave PIX copiada com sucesso!');
      }).catch(err => {
        console.error('Erro ao copiar chave PIX: ', err);
      });
    })

  }

}
