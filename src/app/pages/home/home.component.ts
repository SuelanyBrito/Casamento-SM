import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('content') contentElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  scrollToContent() {
    const yOffset = 0;
    const target = this.contentElement.nativeElement.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }


}

interface ContagemRegressiva {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calcularTempoRestante(): ContagemRegressiva {
  const dataAlvo = new Date('2025-02-08T15:30:00Z');
  const agora = new Date();
  console.log("agora: " + agora)
  console.log("dataAlvo: " + dataAlvo)

  const diferencaEmSegundos = Math.floor((dataAlvo.getTime() - agora.getTime()) / 1000);

  const dias = Math.floor(diferencaEmSegundos / (60 * 60 * 24));
  const horas = Math.floor((diferencaEmSegundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((diferencaEmSegundos % (60 * 60)) / 60);
  const segundos = diferencaEmSegundos % 60;

  return {
    dias,
    horas,
    minutos,
    segundos
  };
}

function atualizarContagemRegressiva(): void {
  const contagem = calcularTempoRestante();

  const diasElement = document.getElementById('dias');
  const horasElement = document.getElementById('horas');
  const minutosElement = document.getElementById('minutos');
  const segundosElement = document.getElementById('segundos');

  if (diasElement) {
    diasElement.innerText = contagem.dias.toString().padStart(2, '0');
  }
  if (horasElement) {
    horasElement.innerText = contagem.horas.toString().padStart(2, '0');
  }
  if (minutosElement) {
    minutosElement.innerText = contagem.minutos.toString().padStart(2, '0');
  }
  if (segundosElement) {
    segundosElement.innerText = contagem.segundos.toString().padStart(2, '0');
  }
}

setInterval(atualizarContagemRegressiva, 1000);


