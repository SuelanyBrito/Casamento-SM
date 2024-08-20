import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-opt-image-padrinhos',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './opt-image-padrinhos.component.html',
  styleUrls: ['./opt-image-padrinhos.component.css']
})
export class OptImagePadrinhosComponent {
  images: string[] = [
    '../../assets/img/padrinhos/ref1.png',
    '../../assets/img/padrinhos/ref2.png',
    '../../assets/img/padrinhos/ref3.png',
    '../../assets/img/padrinhos/ref4.png',
    '../../assets/img/padrinhos/ref5.png',
    '../../assets/img/padrinhos/ref6.png'
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
