import { Component, ElementRef, OnInit, ViewChild,  AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('content') contentElement!: ElementRef;
  isAtBottom: boolean = false;

  constructor() {}

  ngAfterViewInit(): void {
    // Adiciona evento de scroll com uma função simples
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      // Atualiza estado de acordo com a posição
      this.isAtBottom = scrollPosition >= pageHeight - 50;
    });
  }

  scrollToContent() {
    if (this.isAtBottom) {
      // Volta ao topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Vai até o conteúdo
      const targetPosition = this.contentElement.nativeElement.offsetTop;
      window.scrollTo({ top: targetPosition + 200, behavior: 'smooth' });
    }
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


