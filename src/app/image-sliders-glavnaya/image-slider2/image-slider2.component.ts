import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider2.component.html',
  styleUrl: './image-slider2.component.scss'
})
export class ImageSlider2Component {
  imagesPortfolio = [
     { src: 'assets/portfolio/Лесняк окрашивание.png', alt: 'Image 1',
      master: 'Виктория Лесняк',
     },
     { src: 'assets/portfolio/Маланкина окрашивание.png', alt: 'Image 1',
      master: 'Светлана Маланкина',
     },
     { src: 'assets/portfolio/Куликова окрашивание.png', alt: 'Image 1',
      master: 'Виктория Куликова',
     },
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.imagesPortfolio.length - 1) {
      this.currentIndex += 1; // Переключение на следующий слайд
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1; // Переключение на предыдущий слайд
    }
  }

  get visibleImages() {
    return this.imagesPortfolio.slice(this.currentIndex, this.currentIndex + 1); // Получаем текущие три изображения
  }

  get isNextDisabled() {
    return this.currentIndex >= this.imagesPortfolio.length - 1; // Проверка, отключена ли кнопка "Вперед"
  }

  get isPrevDisabled() {
    return this.currentIndex === 0; // Проверка, отключена ли кнопка "Назад"
  }
}
