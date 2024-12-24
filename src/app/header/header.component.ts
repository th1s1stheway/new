import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Импортируйте ваш сервис аутентификации
import { MatDialog } from '@angular/material/dialog'; // Импортируйте MatDialog для открытия диалогов
import { BookingFormComponent } from '../booking-form/booking-form.component'; // Импортируйте компонент формы записи
import { LoginFormComponent } from '../login-form/login-form.component'; // Импортируйте компонент формы авторизации
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,],
  template: `
    <header>
      <div class="header__logo">
        <img src="assets/logo.png" alt="Логотип" />
      </div>
      <nav>
        <ul>
          <li><a href="" routerLink="/" routerLinkActive="active">Главная</a></li>
          <li><a href="#uslugi">Услуги</a></li>
          <li><a href="/komanda" routerLink="/contact">Команда</a></li>
          <li><a href="/academy" routerLink="/academy" routerLinkActive="active">Академия маникюра</a></li>
          <li><a href="/nashi-raboti" routerLink="/nashi-raboti" routerLinkActive="active">Наши работы</a></li>
          <li><a href="#about">О салоне</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
      <span>г. Красноярк, ул. Красноярский рабочий 160, стр.1</span>
      <!--<a href="/form"><button>Онлайн запись</button></a>-->
      <button (click)="onBookOnline()">Онлайн запись</button>
    </header>

    <router-outlet></router-outlet>
  `,
})


export class HeaderComponent {
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  onBookOnline() {
    const dialogConfig = {
      width: 'auto',  // Установите желаемую ширину
      height: 'auto', // Установите желаемую высоту
      disableClose: false, // Запретить закрытие окна при клике вне его
      hasBackdrop: true, // Показать задний фон
      backdropClass: 'custom-backdrop', // Класс для настройки фона (опционально)
      panelClass: 'custom-dialog' // Класс для настройки стилей диалога
    };

    if (this.authService.isAuthenticated()) {
      // Если пользователь авторизован, открываем форму записи
      this.dialog.open(BookingFormComponent, dialogConfig);
    } else {
      // Если не авторизован, открываем форму авторизации
      const dialogRef = this.dialog.open(LoginFormComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          console.log('Пользователь успешно авторизован');
        }
      });
    }
  }
}