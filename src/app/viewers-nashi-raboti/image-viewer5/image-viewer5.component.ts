import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer5.component.html',
  styleUrl: './image-viewer5.component.scss'
})
export class ImageViewer5Component {
  images = [
    { src: 'assets/nashi-raboti/Мужские стрижки1.png', alt: 'Image 1' },
    { src: 'assets/nashi-raboti/Мужские стрижки2.png', alt: 'Image 2' },
    { src: 'assets/nashi-raboti/Мужские стрижки3.png', alt: 'Image 3' },
    { src: 'assets/nashi-raboti/Мужские стрижки4.png', alt: 'Image 4' },
    { src: 'assets/nashi-raboti/Мужские стрижки5.png', alt: 'Image 5' },
    { src: 'assets/nashi-raboti/Мужские стрижки6.png', alt: 'Image 6' },
    { src: 'assets/nashi-raboti/Мужские стрижки7.png', alt: 'Image 7' },
    { src: 'assets/nashi-raboti/Мужские стрижки8.png', alt: 'Image 8' },
  ];

  selectedImage: string | null = null;

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
