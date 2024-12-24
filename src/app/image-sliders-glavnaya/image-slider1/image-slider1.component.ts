import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider1.component.html',
  styleUrl: './image-slider1.component.scss'
})
export class ImageSlider1Component {
  imagesPortfolio = [
    { src: 'assets/portfolio/Лесняк.png', alt: 'Стрижка 2',
      master: 'Виктория Лесняк',
     },
     { src: 'assets/portfolio/Куликова.png', alt: 'Стрижка 1',
      master: 'Виктория Куликова',
     },
     { src: 'assets/portfolio/Маланкина.png', alt: 'Стрижка 3',
      master: 'Светлана Маланкина',
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
