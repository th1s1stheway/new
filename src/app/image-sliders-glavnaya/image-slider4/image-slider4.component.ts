import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider4.component.html',
  styleUrl: './image-slider4.component.scss'
})
export class ImageSlider4Component {
  imagesPortfolio = [
    { src: 'assets/portfolio/Педикюр1.png', alt: 'Image 1',
      master: 'Лариса Бодикова',
     },
     { src: 'assets/portfolio/Педикюр2.png', alt: 'Image 2',
      master: 'Лариса Бодикова',
     },
     { src: 'assets/portfolio/Педикюр3.png', alt: 'Image 3',
      master: 'Светлана шаповалова',
     },
     { src: 'assets/portfolio/Педикюр4.png', alt: 'Image 4',
      master: 'Светлана шаповалова',
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
