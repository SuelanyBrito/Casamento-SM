import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padrinho',
  templateUrl: './padrinho.component.html',
  styleUrls: ['./padrinho.component.css']
})
export class PadrinhoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images: string[] = [
    '../../assets/img/padrinhos/inspiracao.jpg'
  ];

  selectedImage: string | null = null;

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

}


