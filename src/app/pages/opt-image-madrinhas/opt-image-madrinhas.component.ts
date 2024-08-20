import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-opt-image-madrinhas',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './opt-image-madrinhas.component.html',
  styleUrls: ['./opt-image-madrinhas.component.css']
})
export class OptImageMadrinhasComponent {
  images: string[] = [
    '../../assets/img/madrinhas/ref4.png',
    '../../assets/img/madrinhas/ref5.png',
    '../../assets/img/madrinhas/ref6.png',
    '../../assets/img/madrinhas/ref7.png',
    '../../assets/img/madrinhas/ref8.png',
    '../../assets/img/madrinhas/ref11.png',
    '../../assets/img/madrinhas/ref12.png',
    '../../assets/img/madrinhas/ref10.png',
    '../../assets/img/madrinhas/ref1.png'
  ];

  selectedImage: string | null = null;
  currentIndex: number = 0;

  openModal(image: string) {
    this.currentIndex = this.images.indexOf(image);
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

  prevImage(event: MouseEvent) {
    event.stopPropagation();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = this.images.length - 1;
      this.selectedImage = this.images[this.currentIndex];
    }
  }

  nextImage(event: MouseEvent) {
    event.stopPropagation();
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.selectedImage = this.images[this.currentIndex];
    } else {
      this.currentIndex = 0;
      this.selectedImage = this.images[this.currentIndex];
    }
  }
}
