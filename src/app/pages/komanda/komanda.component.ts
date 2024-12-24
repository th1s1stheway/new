import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-komanda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
  <div class="wrapper">
    <app-header />
    <div class="banner-komanda banner">
      <div class="container">
        <div class="banner-komanda__title banner-title"><h2>НАШИ МАСТЕРА</h2></div>
        <div class="banner-komanda__text banner-text">
          <p>Красота — не внешняя оболочка. Это и внутренняя свобода, уверенность в себе и интеллект. Красота индивидуальна, а каждый человек неповторим.Наши мастера помогут подружиться с собой, научиться любить себя, снять маски.
          </p>
        </div>
        <div class="banner-komanda__icons icons">
            <img src="assets/icons/Женская_стрижка_иконка.png" alt="Icon 1" class="icon">
            <img src="assets/icons/Окрашевание_иконка.png" alt="Icon 2" class="icon">
            <img src="assets/icons/Уход_за_волосами_иконка.png" alt="Icon 3" class="icon">
            <img src="assets/icons/Массаж_иконка.png" alt="Icon 4" class="icon">
            <img src="assets/icons/Маникюр_иконка.png" alt="Icon 5" class="icon">
            <img src="assets/icons/Педикюр _иконка.png" alt="Icon 6" class="icon">
            <img src="assets/icons/Мужская_стрижка_иконка.png" alt="Icon 7" class="icon">
        </div>
      </div>
    </div>
    <div class="cards-komanda">
      <div class="container">
        <div class="cards-komanda__row">
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-1.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Виктория Куликова 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер, мастер универсал
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 15 лет
              </p>
              <br>
              <p>Я хорошо разбираюсь в восстановлении волос и их структуре. Проведу диагностику и подберу оптимальную процедуру, а также выполню стрижку любого типа. Ботокс для волос и кератин — мои любимые техники. <br>&bull; Регулярно обучаюсь новым направлениям и трендам. <br>&bull; Изучаю современные продукты для ухода и восстановления волос, пробуя их на себе. <br>&bull; Участвую в конкурсах и марафонах по колористике."
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-2.png" alt="">
            </div>
            <div class="cards-komanda__name">
            Виктория Лесняк 
            </div>
            <div class="cards-komanda__speciality">
            Парикмахер, мастер универсал
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 21 год
              </p>
              <br>
              <p>Я прекрасно разбираюсь в структуре волос и процедурах их восстановления. Выполню мужскую или женскую стрижку. Сложные окрашивания – это моя страсть.<br>&bull; Обучалась у именитых инструкторов в области колористики и стрижек.<br>&bull; Регулярно повышаю квалификацию, посещая семинары и вебинары.<br>&bull; Создам любое сложное окрашивание на высшем уровне.
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-3.png" alt="">
            </div>
            <div class="cards-komanda__name">
            Лариса Бодикова
            </div>
            <div class="cards-komanda__speciality">
            Мастер маникюра/педикюра
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 20 лет
              </p>
              <br>
              <p>Я обожаю создавать красивые и ухоженные ногти, уделяя внимание каждому клиенту. Умею делать уникальный дизайн.<br>&bull; Использую индивидуальные инструменты для каждого клиента.<br>&bull; Регулярно обучаюсь и посещаю семинары, чтобы быть в курсе новых трендов.<br>&bull; Гарантирую долговечность и качество своих работ.<br>&bull; Создам любой маникюр на первоклассном уровне.
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-4.png" alt="">
            </div>
            <div class="cards-komanda__name">
            Анастасия 
            </div>
            <div class="cards-komanda__speciality">
            Парикмахер, мужской мастер
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 16 лет
              </p>
              <br>
              <p>Я отлично разбираюсь в современных мужских стрижках и всегда обеспечиваю высокое качество работы. У меня много постоянных клиентов.<br>&bull; Проходила обучение у лучших барберов России.<br>&bull; Постоянно совершенствую свои навыки, участвуя в семинарах и вебинарах.<br>&bull; Глубоко понимаю мужские уходы для волос и бороды.<br>&bull; Сделаю любую стрижку на высшем уровне.
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-5.png" alt="">
            </div>
            <div class="cards-komanda__name">
            Светлана шаповалова 
            </div>
            <div class="cards-komanda__speciality">
            Мастер маникюра/педикюра
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 24 года
              </p>
              <br>
              <p>Забота о ваших ногтях для меня не просто работа, а настоящее искусство. <br>&bull; Постоянно совершенствую свои навыки, чтобы предложить вам самые современные и креативные решения. <br>&bull; Гарантирую индивидуальный подход к каждому клиенту и создание уникального стиля. <br>&bull; Мои работы сочетают красоту, аккуратность и стойкость, чтобы вы всегда чувствовали себя уверенно.
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-6.png" alt="">
            </div>
            <div class="cards-komanda__name">
            Надежда Шпанагель 
            </div>
            <div class="cards-komanda__speciality">
            Мастер маникюра/педикюра
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 8 лет
              </p>
              <br>
              <p>Я обладаю глубокими знаниями о красивых и здоровых ногтях, а также обожаю рисовать.<br>&bull; У меня строгие требования к чистоте и качеству. Для каждого клиента использую индивидуальный инструмент, который распечатывается при нем.<br>&bull; Постоянно развиваю свои навыки через семинары и вебинары.<br>&bull; Гарантирую качество своих ногтей.<br>&bull; Создам любой дизайн на первоклассном уровне.
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-7.png" alt="">
            </div>
            <div class="cards-komanda__name">
            Светлана Маланкина 
            </div>
            <div class="cards-komanda__speciality">
            Парикмахер, женский мастер
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 25 лет
              </p>
              <br>
              <p>Я отлично разбираюсь в современных техниках стрижек и гарантирую качество своих работ. Всегда обеспечиваю высокий уровень обслуживания и имею много постоянных клиентов.<br>&bull; Постоянно повышаю квалификацию через семинары и вебинары.<br>&bull; Смогу выполнить любую сложную стрижку с учетом индивидуальных особенностей клиента.<br>&bull; Сделаю любую стрижку на высшем уровне.
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-8.png" alt="">
            </div>
            <div class="cards-komanda__name">
            Анна дубровская 
            </div>
            <div class="cards-komanda__speciality">
            Массажист
            </div>
            <div class="cards-komanda__dop">
              <p>
              Стаж работы: 20 лет
              </p>
              <br>
              <p>Я знаю всё о техниках массажа и их влиянии на здоровье, помогу снять напряжение и восстановить баланс в теле.<br>&bull; Прошла обучение у лучших специалистов в области массажа, а также обучалась лучшим техникам в Китае и США.<br>&bull; Постоянно повышаю квалификацию.<br>&bull; Гарантирую индивидуальный подход и высокий уровень работы для достижения ваших целей, будь то расслабление, восстановление или укрепление здоровья.
              </p>
            </div>
            <div class="cards-komanda__button">
              <a class="button-green" href="/form">Записаться</a>
            </div>
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
  .
  `,
})
export class KomandaComponent {

}
