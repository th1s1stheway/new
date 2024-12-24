import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider-top.component.html',
  styleUrl: './image-slider-top.component.scss'
})
export class ImageSliderTopComponent {
  images = [
    { src: 'assets/2.png', alt: 'Image 1' },
    { src: 'assets/1.png', alt: 'Image 2' },
    { src: 'assets/3.png', alt: 'Image 3' },
    { src: 'assets/4.png', alt: 'Image 4' },
    { src: 'assets/5.png', alt: 'Image 5' },
    { src: 'assets/6.png', alt: 'Image 6' },
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex += 1; // Переключение на следующий слайд
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1; // Переключение на предыдущий слайд
    }
  }

  get visibleImages() {
    return this.images.slice(this.currentIndex, this.currentIndex + 1); // Получаем текущие три изображения
  }

  get isNextDisabled() {
    return this.currentIndex >= this.images.length - 1; // Проверка, отключена ли кнопка "Вперед"
  }

  get isPrevDisabled() {
    return this.currentIndex === 0; // Проверка, отключена ли кнопка "Назад"
  }
}
