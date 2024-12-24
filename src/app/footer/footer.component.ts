import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer>
    <div class="container">
      <div class="footer__top">
        <div class="footer__row">
          <div class="footer__column"> 
            <div class="footer__item-logo">
              <div class="footer__logo">
                <img src="assets/logo-footer.png" alt="Логотип" />
              </div>
              <div class="footer__icons">
                <div class="footer__icon">
                  <img src="assets/footer__icons/whatsApp.svg" alt="">
                </div>
                <div class="footer__icon">
                  <a href="https://vk.com/nano_prof_krsk" target="_blank" ><img src="assets/footer__icons/VK.svg" alt=""></a>
                </div>
              </div>
              <div class="footer__author">Ⓒ ИП Шаполвалова, 2024</div>
              <div class="footer__politika"><a href="/privacy-policy" target="_blank">Политика конфиденциальности</a></div>
            </div>
          </div>
          <div class="footer__column"> 
            <div class="footer__item">
              <div class="footer__title">
                <h2>Услуги</h2>
              </div>
              <div class="footer__body">
                <ul>
                  <li><a href="/strizhki">Стрижки и укладки</a></li>
                  <li><a href="/okrashivanie">Окрашивание и уход</a></li>
                  <li><a href="/muzh-strizhki">Мужские стрижки</a></li>
                  <li><a href="/manicure">Маникюр</a></li>
                  <li><a href="/pedicure">Педикюр</a></li>
                  <li><a href="/massage">Массаж</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer__column"> 
            <div class="footer__item">
              <div class="footer__title">
                <h2>Академия</h2>
              </div>
              <div class="footer__body">
                <ul>
                  <li><a href="/academy-manicure">Маникюр от А до Я</a></li>
                  <li><a href="/academy-manicure">Гель-лак NANLAC</a></li>
                  <li><a href="/academy-manicure">Дизайн ногтей «Френч»</a></li>
                  <li><a href="/academy-manicure">Гелевый маникюр</a></li>
                  <li><a href="/academy-manicure">Постановка формы</a></li>
                  <li><a href="/academy-manicure">Другое</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer__column"> 
            <div class="footer__item">
              <div class="footer__title">
                <h2>Салон</h2>
              </div>
              <div class="footer__body">
                <ul>
                  <li><a href="#uslugi">Услуги</a></li>
                  <li><a href="/nashi-raboti" routerLink="/nashi-raboti" routerLinkActive="active">Наши работы</a></li>
                  <li><a href="/komanda" routerLink="/contact">Команда</a> </li>
                  <li><a href="#about">О салоне</a></li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div class="footer__contact" id="contact">
        <div class="footer__row-contact">
          <div class="footer__column-contact">
            <div class="footer__item-contact">
              <p>Ежедневно с 09:00 до 20:00</p>
            </div>
          </div>
          <div class="footer__column-contact">
            <div class="footer__item-contact">
              <p>ул. Красноярский рабочий 160, стр.1</p>
            </div>
          </div>
          <div class="footer__column-contact">
            <div class="footer__item-contact">
              <h2>+7 (391) 845-98-32</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Affaf14f3c61d7bb598293d6e8aae48631b1e5f3bfde91370197fa89bc78ee87c&amp;source=constructor" width="100%" height="302" frameborder="0">
        </iframe>
        <!-- Здесь будет Яндекс карта -->
      </div>
    </div>
  </footer>
  `
  
})
export class FooterComponent {

}
