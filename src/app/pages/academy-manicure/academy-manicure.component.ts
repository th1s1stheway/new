import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImageViewerAcademyComponent } from "../../image-viewer-academy/image-viewer-academy.component";

@Component({
  selector: 'app-academy-manicure',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ImageViewerAcademyComponent],
  template: `
  <div class="wrapper">
    <app-header />
    <div class="banner-academy-manicure banner">
      <div class="container">
        <div class="banner-academy-manicure__title banner-title"><h2>обучение МАСТЕРОВ МАНИКЮРА</h2></div>
        <div class="banner-academy-manicure__text banner-text">
          <p>
            Обучитесь навыкам работы мастром маникюра и окупите обучение уже через месяц.
          </p>
        </div>
      </div>
    </div>
    <div class="cards-academy-manicure">
      <div class="container">
        <div class="cards-academy-manicure__row">
            <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/биоламинирование ногтей.png" alt="биоламинирование ногтей">
              </div>
              <div class="cards-academy-manicure__title">
                биоламинирование ногтей</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                В программе курса:
                <ul>
                  <li>- знакомство с продуктом;</li>
                  <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                  <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                  <li>- работа в технике мягкого градиента "Babyboomer";</li>
                  <li>- создание правильной архитектуры;</li>
                  <li>- выравнивание "идеальный блик".</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1625" target="_blank">Подробнее</a>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Постановка формы.png" alt="Постановка формы">
              </div>
              <div class="cards-academy-manicure__title">
              Постановка формы</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (11 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
              Постановка формы - это:
                <ul>
                  <li>- преимущества работы на формах; </li>
                  <li>- подготовка натуральной ногтевой пластины к процедуре;</li>
                  <li>- правила постановки и особенности работы с формами;</li>
                  <li>- техника выкладки свободного края;</li>
                  <li>- техника удлинения ногтевого ложа;</li>
                  <li>- техника опила;</li>
                  <li>- причины появления отслоек.</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1009" target="_blank">Подробнее</a>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Точечный дизайн Paint Point.png" alt="Точечный дизайн Paint Point">
              </div>
              <div class="cards-academy-manicure__title">
              Точечный дизайн Paint Point</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
              Авторская технология росписи ногтей Paint Point от Nano Professional – это точечная роспись, которая позволяет создать любой рисунок быстро, а выглядит на все 100 %.<br>Для работы в этой технике на ногтях используются уникальные гель-краски Paint Gel от Nano Professional. Они обладают оптимальной консистенцией, насыщенным пигментом, не растекаются, имеют четкий контур при нанесении.
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_764" target="_blank">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="cards-academy-manicure__row">
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Дизайн ногтей SCULPTOR.png" alt="Дизайн ногтей SCULPTOR">
              </div>
              <div class="cards-academy-manicure__title">
              Дизайн ногтей SCULPTOR</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
              «Yoga Gel» при правильной технике нанесения полностью повторяет первоначальные дизайнерские задумки мастера, и позволяет создать объемные элементы, в некоторых моментах превозмогающие возможностям 4D-гелей. Как и принято, в йоге, гель идеально гармонирует с ногтевой пластиной клиента, что дарит ему приятные тактильные ощущения.
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1019" target="_blank">Подробнее</a>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Дизайн ногтей Френч.png" alt="Дизайн ногтей Френч">
              </div>
              <div class="cards-academy-manicure__title">
              Дизайн ногтей «Френч»</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                В программе курса:
                <ul>
                  <li>- нюансы и тонкости прорисовки;</li>
                  <li>- разбор основных схем прорисовки;</li>
                  <li>- отработка на типсах;</li>
                  <li>- отработка на модели;</li>
                  <li>- техника выравнивания каучуковыми базами для идеального френча.</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1005" target="_blank">Подробнее</a>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Гелевый маникюр.png" alt="Гелевый маникюр">
              </div>
              <div class="cards-academy-manicure__title">
              Гелевый маникюр</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (11 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                В программе курса:
                <ul>
                  <li>- показания к проведению процедуры «Гелевый маникюр»;</li>
                  <li>- гелевая технология укрепления натуральной ногтевой пластины;</li>
                  <li>- армирование и ремонт натуральных ногтей;</li>
                  <li>- техника опила;</li>
                  <li>- технология френч - покрытия.</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1001" target="_blank">Подробнее</a>
            </div>
          </div>
        </div>
        <div class="cards-academy-manicure__row">
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Моделирование ногтей PROGEL.png" alt="Моделирование ногтей PROGEL">
              </div>
              <div class="cards-academy-manicure__title">
              Моделирование ногтей полиакриловым гелем</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (11 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                Программа курса:
                <ul>
                  <li>- теория;</li>
                  <li>- моделирование ногтей;</li>
                  <li>- подготовка пластины;</li>
                  <li>- поджатие полиакрилового геля PROGEL;</li>
                  <li>- техника работы кистью;</li>
                  <li>- техника выкладки полиакриловым гелем;</li>
                  <li>- схема опила.</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1013" target="_blank">Подробнее</a>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Аппаратная коррекция.png" alt="Аппаратная коррекция">
              </div>
              <div class="cards-academy-manicure__title">
              Аппаратная коррекция </div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                В программе курса:
                <ul>
                  <li>- материаловедение;</li>
                  <li>- комбинированный маникюр;</li>
                  <li>- адгезия;</li>
                  <li>- техника опиливания;</li>
                  <li>- правила коррекции;</li>
                  <li>- материалы для отработки предоставляются.</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1021" target="_blank">Подробнее</a>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/Дизайн ногтей WATERWAY.png" alt="Дизайн ногтей WATERWAY">
              </div>
              <div class="cards-academy-manicure__title">
              Дизайн ногтей "WATERWAY"</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
              На курсе Академии маникюра Nano Professional «Waterway» научим делать ажурные, воздушные дизайны, не обычную флористику. <br>Совершенно простая техника выполнения подобного дизайна ногтей и использование гель-лаков Nano Professional, позволяет быстро получать неповторимые рисунки.
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <a class="button-green" href="https://vk.com/wall-16745351_1028" target="_blank">Подробнее</a>
            </div>
          </div>
        </div>
    <div class="students-academy-manicure">
      <div class="container">
        <div class="students-academy-manicure__title title">
          <h2>Работы учеников</h2>
        </div>
        <app-image-viewer-academy />
      </div>
      </div>
      </div>
    </div>
    <app-footer />
  </div>
  `,
})
export class AcademyManicureComponent {

}
