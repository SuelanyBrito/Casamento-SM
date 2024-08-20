import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-madrinha',
  templateUrl: './madrinha.component.html',
  styleUrls: ['./madrinha.component.css']
})
export class MadrinhaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  images: string[] = [
    '../../assets/img/madrinhas/inspiracao.png'
  ];

  selectedImage: string | null = null;

  openModal(image: string) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

}
