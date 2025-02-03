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
  const dataAlvo = new Date(Date.UTC(2025, 1, 8, 18, 0, 0)); // 8 de fevereiro às 15:00 no Brasil (UTC-3)
  const agora = new Date(); // Pega a data atual no horário local

  // Calcula a diferença total em segundos
  const diferencaEmSegundos = Math.floor((dataAlvo.getTime() - agora.getTime()) / 1000);

  // Evita valores negativos (caso a data já tenha passado)
  if (diferencaEmSegundos < 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  }

  // Cálculo preciso de dias, horas, minutos e segundos
  const dias = Math.floor(diferencaEmSegundos / (60 * 60 * 24));
  const horas = Math.floor((diferencaEmSegundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((diferencaEmSegundos % (60 * 60)) / 60);
  const segundos = diferencaEmSegundos % 60;

  console.log(`Faltam...\n${diferencaEmSegundos} segundos\n${minutos} minutos\n${horas} horas\n${dias} dias`);

  return { dias, horas, minutos, segundos };
}

function atualizarContagemRegressiva(): void {
  const contagem = calcularTempoRestante();

  document.getElementById('dias')!.innerText = contagem.dias.toString().padStart(2, '0');
  document.getElementById('horas')!.innerText = contagem.horas.toString().padStart(2, '0');
  document.getElementById('minutos')!.innerText = contagem.minutos.toString().padStart(2, '0');
  document.getElementById('segundos')!.innerText = contagem.segundos.toString().padStart(2, '0');
}

// Atualiza a contagem regressiva a cada segundo
setInterval(atualizarContagemRegressiva, 1000);
