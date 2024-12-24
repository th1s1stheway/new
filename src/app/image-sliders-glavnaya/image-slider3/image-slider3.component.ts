import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider3.component.html',
  styleUrl: './image-slider3.component.scss'
})
export class ImageSlider3Component {
  imagesPortfolio = [
    { src: 'assets/portfolio/Маникюр Лариса 1.png', alt: 'Image 1',
      master: 'Лариса Бодикова',
     },
     { src: 'assets/portfolio/Маникюр Лариса 2.png', alt: 'Image 1',
      master: 'Лариса Бодикова',
     },
     { src: 'assets/portfolio/Маникюр Света1.png', alt: 'Image 1',
      master: 'Светлана шаповалова',
     },
     { src: 'assets/portfolio/Маникюр Света3.png', alt: 'Image 1',
      master: 'Светлана шаповалова',
     },
     { src: 'assets/portfolio/Маникюр Света5.png', alt: 'Image 1',
      master: 'Светлана шаповалова',
     },
     { src: 'assets/portfolio/Маникюр Надежда1.png', alt: 'Image 1',
      master: 'Надежда Шпанагель',
     },
     { src: 'assets/portfolio/Маникюр Надежда2.png', alt: 'Image 1',
      master: 'Надежда Шпанагель',
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
