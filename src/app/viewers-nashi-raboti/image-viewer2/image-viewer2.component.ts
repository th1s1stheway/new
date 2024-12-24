import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer2.component.html',
  styleUrl: './image-viewer2.component.scss'
})
export class ImageViewer2Component {
  images = [
    { src: 'assets/nashi-raboti/Окрашивание1.png', alt: 'Image 1' },
    { src: 'assets/nashi-raboti/Окрашивание2.png', alt: 'Image 2' },
    { src: 'assets/nashi-raboti/Окрашивание3.png', alt: 'Image 3' },
    { src: 'assets/nashi-raboti/Окрашивание4.png', alt: 'Image 4' },
    { src: 'assets/nashi-raboti/Окрашивание5.png', alt: 'Image 5' },
    { src: 'assets/nashi-raboti/Окрашивание6.png', alt: 'Image 6' },
    { src: 'assets/nashi-raboti/Окрашивание7.png', alt: 'Image 7' },
    { src: 'assets/nashi-raboti/Окрашивание8.png', alt: 'Image 8' },
    { src: 'assets/nashi-raboti/Окрашивание9.png', alt: 'Image 9' },
    { src: 'assets/nashi-raboti/Окрашивание10.png', alt: 'Image 10' },
    { src: 'assets/nashi-raboti/Окрашивание11.png', alt: 'Image 11' },
    { src: 'assets/nashi-raboti/Окрашивание12.png', alt: 'Image 12' },
    { src: 'assets/nashi-raboti/Окрашивание13.png', alt: 'Image 13' },
    { src: 'assets/nashi-raboti/Окрашивание14.png', alt: 'Image 14' },
    { src: 'assets/nashi-raboti/Окрашивание15.png', alt: 'Image 15' },
    { src: 'assets/nashi-raboti/Окрашивание16.png', alt: 'Image 16' },
    { src: 'assets/nashi-raboti/Окрашивание17.png', alt: 'Image 17' },
    { src: 'assets/nashi-raboti/Окрашивание18.png', alt: 'Image 18' },
    { src: 'assets/nashi-raboti/Окрашивание19.png', alt: 'Image 19' },
    { src: 'assets/nashi-raboti/Окрашивание20.png', alt: 'Image 20' },
    { src: 'assets/nashi-raboti/Окрашивание21.png', alt: 'Image 21' },
    { src: 'assets/nashi-raboti/Окрашивание22.png', alt: 'Image 22' },
    { src: 'assets/nashi-raboti/Окрашивание23.png', alt: 'Image 23' },
    { src: 'assets/nashi-raboti/Окрашивание24.png', alt: 'Image 24' },
    { src: 'assets/nashi-raboti/Окрашивание25.png', alt: 'Image 25' },
    { src: 'assets/nashi-raboti/Окрашивание26.png', alt: 'Image 26' },
    { src: 'assets/nashi-raboti/Окрашивание27.png', alt: 'Image 27' },
    { src: 'assets/nashi-raboti/Окрашивание28.png', alt: 'Image 28' },
  ];

  selectedImage: string | null = null;

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
