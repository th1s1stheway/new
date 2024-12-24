import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  imagesTeam = [
    { src: 'assets/portfolio/1.png', alt: 'Image 1',
      master: 'Виктория Куликова',
      speciality: 'Парикмахер, мастер универсал',
     },
    { src: 'assets/portfolio/2.png', alt: 'Image 2' ,
      master: 'Виктория Лесняк',
      speciality: 'Парикмахер, мастер универсал',
    },
    { src: 'assets/portfolio/3.png', alt: 'Image 3', 
      master: 'Лариса Бодикова',
      speciality: 'Мастер маникюра/педикюра',
    },
    { src: 'assets/portfolio/4.png', alt: 'Image 4', 
      master: 'Анастасия',
      speciality: 'Парикмахер, мужской мастер',
    }, 
    { src: 'assets/portfolio/5.png', alt: 'Image 5', 
      master: 'Светлана шаповалова',
      speciality: 'Мастер маникюра/педикюра',
    },
    { src: 'assets/portfolio/6.png', alt: 'Image 6', 
      master: 'Надежда Шпанагель',
      speciality: 'Мастер маникюра/педикюра',
    },
    { src: 'assets/portfolio/7.png', alt: 'Image 7', 
      master: 'Светлана Маланкина',
      speciality: 'Парикмахер, женский мастер',
    },
    { src: 'assets/portfolio/8.png', alt: 'Image 8', 
      master: 'Анна дубровская',
      speciality: 'Массажист',
    },
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.imagesTeam.length - 3) {
      this.currentIndex += 1; // Переключение на следующий слайд
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1; // Переключение на предыдущий слайд
    }
  }

  get visibleImages() {
    return this.imagesTeam.slice(this.currentIndex, this.currentIndex + 3); // Получаем текущие три изображения
  }

  get isNextDisabled() {
    return this.currentIndex >= this.imagesTeam.length - 3; // Проверка, отключена ли кнопка "Вперед"
  }

  get isPrevDisabled() {
    return this.currentIndex === 0; // Проверка, отключена ли кнопка "Назад"
  }
}
