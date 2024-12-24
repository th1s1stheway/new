import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider-portfolio.component.html',
  styleUrl: './image-slider-portfolio.component.scss'
})
export class ImageSliderPortfolioComponent {
  imagesPortfolio = [
    { src: 'assets/portfolio/Куликова.png', alt: 'Стрижка 1',
      master: 'Виктория Куликова',
     },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 2' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 3' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 4' }, 
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 5' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 6' },
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
