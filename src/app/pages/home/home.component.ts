import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('content') contentElement!: ElementRef;
  isAtBottom: boolean = false;
  private scrollListener!: () => void;

  constructor() {}

  ngOnInit(): void {
    // Garantir que a página inicia no topo
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Adiciona evento de scroll
    this.scrollListener = this.checkScrollPosition.bind(this);
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy(): void {
    // Remove o listener ao destruir o componente
    window.removeEventListener('scroll', this.scrollListener);
  }

  scrollToContent() {
    if (this.isAtBottom) {
      // Voltar ao topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Ir para o conteúdo
      const targetPosition = this.contentElement.nativeElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetPosition , behavior: 'smooth' }); // Ajuste para compensar margens
    }
  }

  checkScrollPosition() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    this.isAtBottom = scrollPosition + viewportHeight >= pageHeight - 5; // Aumente/diminua o valor para maior precisão
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


