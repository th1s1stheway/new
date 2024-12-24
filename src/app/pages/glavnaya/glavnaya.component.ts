import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { register } from 'swiper/element/bundle'; // Импортируйте для использования веб-компонентов
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { AccordeonComponent } from "../../accordeon/accordeon.component";
import { ImageSliderComponent } from "../../image-slider/image-slider.component";
import { ImageViewerComponent } from "../../image-viewer/image-viewer.component";
import { ImageSliderTopComponent } from "../../image-slider-top/image-slider-top.component";
import { ImageSliderPortfolioComponent } from "../../image-slider-portfolio/image-slider-portfolio.component";
import { ImageSlider1Component } from "../../image-sliders-glavnaya/image-slider1/image-slider1.component";
import { ImageSlider3Component } from "../../image-sliders-glavnaya/image-slider3/image-slider3.component";
import { ImageSlider2Component } from "../../image-sliders-glavnaya/image-slider2/image-slider2.component";
import { ImageSlider4Component } from "../../image-sliders-glavnaya/image-slider4/image-slider4.component";
import { ImageSlider5Component } from "../../image-sliders-glavnaya/image-slider5/image-slider5.component";

register();

@Component({
  selector: 'app-glavnaya',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, AccordeonComponent, ImageSliderComponent, ImageViewerComponent, ImageSliderTopComponent, ImageSliderPortfolioComponent, ImageSlider1Component, ImageSlider3Component, ImageSlider2Component, ImageSlider4Component, ImageSlider5Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <div class="wrapper">
    <app-header />
    <div class="container">
      <div class="top">
        <div class="top__left">
          <div class="top__title banner-title"><h2>Салон красоты в Красноярске</h2></div>
          <div class="top__subtitle"><p>Место, где вы за один день сможете преобразиться и расслабиться на массаже</p></div>
          <button>Записаться онлайн</button>
          <div class="top__icons icons">
            <img src="assets/icons/Женская_стрижка_иконка.png" alt="Icon 1" class="icon">
            <img src="assets/icons/Окрашевание_иконка.png" alt="Icon 2" class="icon">
            <img src="assets/icons/Уход_за_волосами_иконка.png" alt="Icon 3" class="icon">
            <img src="assets/icons/Массаж_иконка.png" alt="Icon 4" class="icon">
            <img src="assets/icons/Маникюр_иконка.png" alt="Icon 5" class="icon">
            <img src="assets/icons/Педикюр _иконка.png" alt="Icon 6" class="icon">
            <img src="assets/icons/Мужская_стрижка_иконка.png" alt="Icon 7" class="icon">
          </div>
        </div>
        <div class="top__right">
          <app-image-slider-top />
        </div>
      </div>
    </div>
    <app-accordeon />
    <div class="portfolio">
      <div class="container">
        <div class="portfolio__title title"><h2>Работы наших мастеров</h2></div>
        <div class="portfolio__cards">
          <div class="portfolio__card">
            <button (click)="selectTab(0)">Женская стрижка</button>
          </div>
          <div class="portfolio__card">
            <button (click)="selectTab(1)">Окрашивание и уход за волосами</button>
          </div>
          <div class="portfolio__card">
            <button (click)="selectTab(2)">Маникюр</button>
          </div>
          <div class="portfolio__card">
            <button (click)="selectTab(3)">Педикюр</button>
          </div>
          <div class="portfolio__card">
            <button (click)="selectTab(4)">Мужская стрижка</button>
          </div>
        </div>
        <div class="portfolio__slider">
          <div class="content">
            <div *ngIf="selectedTab === 0"><app-image-slider1 /></div>
            <div *ngIf="selectedTab === 1"><app-image-slider2 /></div>
            <div *ngIf="selectedTab === 2"><app-image-slider3/></div>
            <div *ngIf="selectedTab === 3"><app-image-slider4/></div>
            <div *ngIf="selectedTab === 4"><app-image-slider5/></div>
          </div>
        </div>
      </div>
    </div>
    <div class="academy">
      <div class="container">
        <div class="academy__title title"><h2>Академия маникюра</h2></div>
        <div class="academy__body">
          <div class="academy__left">
            <div class="academy__row">
              <div class="academy__column-1">
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">17 курсов</div>
                  <div class="academy__item-text">для закрытия всех вопросов</div>
                </div>
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">Проф оборудование</div>
                  <div class="academy__item-text">школа предоставляет все материалы</div>
                </div>
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">сообщество ВКонтакте</div>
                  <div class="academy__item-text">не просто группа, а сообщество единомышленников</div>
                </div>
              </div>
              <div class="academy__column-2">
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">Сертификаты</div>
                  <div class="academy__item-text">о прохождении курсов</div>
                </div>
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">Теория и практика</div>
                  <div class="academy__item-text">все оттачивается с преподавателем</div>
                </div>
              </div>
            </div>
          </div>
          <div class="academy__right">
            <!-- <button class="button-yellow">Подробнее о курсах</button> -->
            <a href="/academy" class="button-yellow">Подробнее о курсах</a>
          </div>
        </div>

      </div>
    </div>
    <div class="team">
      <div class="container">
        <div class="team__title title"><h2>Команда мастеров</h2></div>
        <div class="team__body">
          <app-image-slider />
        </div>
      </div>
    </div>
    <div id="about" class="why">
      <div class="container">
        <div class="why__title title"><h2>Почему клиенты выбирают 
        Салон красоты «Krasa» </h2></div>
        <div class="why__body">
          <div class="why__left"></div>
          <div class="why__right">
            <div class="why__text">
              <p>Все процедуры в нашем салоне выполняют опытные мастера, которые имеют дипломы, сертификаты и награды, подтверждающие их высокий уровень профессионализма и владение современными техниками.</p>
              <br>
              <p>Мы гордимся обширным портфолио документальных подтверждений квалификации нашей команды. </p>
              <br>
              <p>Эти достижения – ваша гарантия того, что услуги предоставляются исключительно сертифицированными специалистами и соответствуют самым высоким стандартам качества. </p>
              <br>
              <p>Ваше доверие – наша главная ценность, и мы стремимся оправдывать его в каждой процедуре.</p>
            </div>
            <!--<div class="why__button"><button>Смотреть отзывы</button></div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="stroka">
      <div class="container">
        <div class="stroka__row">
          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>
          
          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>

          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>

          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
  `,
})
export class GlavnayaComponent {
  selectedTab: number = 0; // Индекс выбранной вкладки (по умолчанию первая)

  // Метод для выбора вкладки
  selectTab(index: number) {
    this.selectedTab = index; // Устанавливаем индекс выбранной вкладки
  }
}

