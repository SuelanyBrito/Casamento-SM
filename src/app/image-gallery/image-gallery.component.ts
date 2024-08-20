import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images: string[] = [
    '../../assets/img/padrinhos/inspiracao.jpg',
    // '../../assets/img/padrinhos/inspiracao_.jpg'
    // adicione mais imagens conforme necessário
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
