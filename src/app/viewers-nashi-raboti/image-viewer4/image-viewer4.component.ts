import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer4.component.html',
  styleUrl: './image-viewer4.component.scss'
})
export class ImageViewer4Component {
  images = [
    { src: 'assets/nashi-raboti/Педикюр1.png', alt: 'Image 1' },
    { src: 'assets/nashi-raboti/Педикюр2.png', alt: 'Image 2' },
    { src: 'assets/nashi-raboti/Педикюр3.png', alt: 'Image 3' },
    { src: 'assets/nashi-raboti/Педикюр4.png', alt: 'Image 4' },
    { src: 'assets/nashi-raboti/Педикюр5.png', alt: 'Image 5' },
    { src: 'assets/nashi-raboti/Педикюр6.png', alt: 'Image 6' },
    { src: 'assets/nashi-raboti/Педикюр7.png', alt: 'Image 7' },
    { src: 'assets/nashi-raboti/Педикюр8.png', alt: 'Image 8' },
    { src: 'assets/nashi-raboti/Педикюр9.png', alt: 'Image 9' },
    { src: 'assets/nashi-raboti/Педикюр10.png', alt: 'Image 10' },
    { src: 'assets/nashi-raboti/Педикюр11.png', alt: 'Image 11' },
    { src: 'assets/nashi-raboti/Педикюр12.png', alt: 'Image 12' },
    { src: 'assets/nashi-raboti/Педикюр13.png', alt: 'Image 13' },
  ];

  selectedImage: string | null = null;

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
