import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordeon.component.html',
  styleUrl: './accordeon.component.scss'
})
export class AccordeonComponent {
  currentContentIndex = 0;

  // Содержимое для отображения
  contents = [
    {
      title: 'Женские стрижки и укладки',
      image: 'assets/icons/1.png',
      text: 'Это текст для 1 блока.'
    },
    {
      title: 'Окрашивание  и уход',
      image: 'assets/icons/2.png',
      text: 'Это текст для второго блока.'
    },
    {
      title: 'Массаж',
      image: 'assets/icons/3.png',
      text: 'Это текст для третьего блока.'
    },
    {
      title: 'Маникюр',
      image: 'assets/icons/4.png',
      text: 'Это текст для второго блока.'
    },
    {
      title: 'Педикюр',
      image: 'assets/icons/5.png',
      text: 'Это текст для второго блока.'
    },
    {
      title: 'Мужские стрижки',
      image: 'assets/icons/6.png',
      text: 'Это текст для второго блока.'
    },
  ];

  buttons = [
    { text: 'Женские стрижки и укладки', isActive: true }, //true, т.к. при загрузке страницы показывается активным первый элемент
    { text: 'Окрашивание  и уход', isActive: false },
    { text: 'Массаж', isActive: false },
    { text: 'Маникюр', isActive: false },
    { text: 'Педикюр', isActive: false },
    { text: 'Мужские стрижки', isActive: false },
  ];


  changeContent(index: number) {
    // Меняем содержимое
    this.currentContentIndex = index;


    // Переключаем состояние кнопки
    let button = this.buttons[index];
    button.isActive = !button.isActive; // Переключаем активное состояние

    this.buttons.forEach((panel, i) => {
      panel.isActive = i === index; // Активируем только ту панель, на которую нажали, чтобы изменялась иконка
    });

  } 
}
