import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer1.component.html',
  styleUrl: './image-viewer1.component.scss'
})
export class ImageViewer1Component {
  images = [
    { src: 'assets/nashi-raboti/Стрижка1.png', alt: 'Image 1' },
    { src: 'assets/nashi-raboti/Стрижка2.png', alt: 'Image 2' },
    { src: 'assets/nashi-raboti/Стрижка3.png', alt: 'Image 3' },
    { src: 'assets/nashi-raboti/Стрижка4.png', alt: 'Image 4' },
    { src: 'assets/nashi-raboti/Стрижка5.png', alt: 'Image 5' },
    { src: 'assets/nashi-raboti/Стрижка6.png', alt: 'Image 6' },
    { src: 'assets/nashi-raboti/Стрижка7.png', alt: 'Image 7' },
    { src: 'assets/nashi-raboti/Стрижка8.png', alt: 'Image 8' },
    { src: 'assets/nashi-raboti/Стрижка9.png', alt: 'Image 9' },
    { src: 'assets/nashi-raboti/Стрижка10.png', alt: 'Image 10' },
    { src: 'assets/nashi-raboti/Стрижка11.png', alt: 'Image 11' },
    { src: 'assets/nashi-raboti/Стрижка12.png', alt: 'Image 12' },
  ];

  selectedImage: string | null = null;

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
