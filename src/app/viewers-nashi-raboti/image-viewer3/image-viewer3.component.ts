import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer3.component.html',
  styleUrl: './image-viewer3.component.scss'
})
export class ImageViewer3Component {
  images = [
    { src: 'assets/nashi-raboti/Маникюр1.png', alt: 'Image 1' },
    { src: 'assets/nashi-raboti/Маникюр2.png', alt: 'Image 2' },
    { src: 'assets/nashi-raboti/Маникюр3.png', alt: 'Image 3' },
    { src: 'assets/nashi-raboti/Маникюр4.png', alt: 'Image 4' },
    { src: 'assets/nashi-raboti/Маникюр5.png', alt: 'Image 5' },
    { src: 'assets/nashi-raboti/Маникюр6.png', alt: 'Image 6' },
    { src: 'assets/nashi-raboti/Маникюр7.png', alt: 'Image 7' },
    { src: 'assets/nashi-raboti/Маникюр8.png', alt: 'Image 8' },
    { src: 'assets/nashi-raboti/Маникюр9.png', alt: 'Image 9' },
    { src: 'assets/nashi-raboti/Маникюр10.png', alt: 'Image 10' },
    { src: 'assets/nashi-raboti/Маникюр11.png', alt: 'Image 11' },
    { src: 'assets/nashi-raboti/Маникюр12.png', alt: 'Image 12' },
    { src: 'assets/nashi-raboti/Маникюр13.png', alt: 'Image 13' },
    { src: 'assets/nashi-raboti/Маникюр14.png', alt: 'Image 14' },
    { src: 'assets/nashi-raboti/Маникюр15.png', alt: 'Image 15' },
    { src: 'assets/nashi-raboti/Маникюр16.png', alt: 'Image 16' },
    { src: 'assets/nashi-raboti/Маникюр17.png', alt: 'Image 17' },
    { src: 'assets/nashi-raboti/Маникюр18.png', alt: 'Image 18' },
    { src: 'assets/nashi-raboti/Маникюр19.png', alt: 'Image 19' },
    { src: 'assets/nashi-raboti/Маникюр20.png', alt: 'Image 20' },
    { src: 'assets/nashi-raboti/Маникюр21.png', alt: 'Image 21' },
    { src: 'assets/nashi-raboti/Маникюр22.png', alt: 'Image 22' },
    { src: 'assets/nashi-raboti/Маникюр23.png', alt: 'Image 23' },
    { src: 'assets/nashi-raboti/Маникюр24.png', alt: 'Image 24' },
    { src: 'assets/nashi-raboti/Маникюр25.png', alt: 'Image 25' },
    { src: 'assets/nashi-raboti/Маникюр26.png', alt: 'Image 26' },
    { src: 'assets/nashi-raboti/Маникюр27.png', alt: 'Image 27' },
    { src: 'assets/nashi-raboti/Маникюр28.png', alt: 'Image 28' },
    { src: 'assets/nashi-raboti/Маникюр29.png', alt: 'Image 29' },
    { src: 'assets/nashi-raboti/Маникюр30.png', alt: 'Image 30' },
    { src: 'assets/nashi-raboti/Маникюр31.png', alt: 'Image 31' },
    { src: 'assets/nashi-raboti/Маникюр32.png', alt: 'Image 32' },
  ];

  selectedImage: string | null = null;

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
