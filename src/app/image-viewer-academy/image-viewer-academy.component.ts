import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer-academy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer-academy.component.html',
  styleUrl: './image-viewer-academy.component.scss'
})
export class ImageViewerAcademyComponent {
  images = [
    { src: 'assets/academy/1.png', alt: 'Image 1' },
    { src: 'assets/academy/2.png', alt: 'Image 2' },
    { src: 'assets/academy/3.png', alt: 'Image 3' },
    { src: 'assets/academy/4.png', alt: 'Image 4' },
    { src: 'assets/academy/5.png', alt: 'Image 5' },
    { src: 'assets/academy/6.png', alt: 'Image 6' },
    { src: 'assets/academy/7.png', alt: 'Image 7' },
    { src: 'assets/academy/8.png', alt: 'Image 8' },
    { src: 'assets/academy/9.png', alt: 'Image 9' },
  ];

  selectedImage: string | null = null;

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
