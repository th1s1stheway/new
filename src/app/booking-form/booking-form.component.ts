import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [],
  styleUrl: './booking-form.component.scss',
  template: `
    <div class="wrapper">
      <div class="booking-form">
            <div class="container">
                <h2>Записаться в салон красоты "KRASA"</h2>
                <div class="booking-form__columns">
                  <div class="booking-form__left">
                    <label for="client-name">Фамилия и имя</label>
                    <input type="text" id="client-name" placeholder="Укажите ваше имя и фамилию" required>  
                  </div>
                  <div class="booking-form__right">
                    <div class="dropdown">
                      <label for="filterService">Выберите услугу:</label>
                      <input type="text" id="filterService" placeholder="Введите название услуги" autocomplete="off">
                      <div class="options" id="optionsContainer"></div>
                    </div>  
            
                    <div class="dropdown">
                      <label for="filterStaff">Выберите мастера:</label>
                      <input type="text" id="filterStaff" placeholder="Выберите мастера" autocomplete="off">
                      <img src="assets/form/down.png" class="arrow" alt="Стрелка вниз"/>
                      <div class="staffOptions" id="staffOptionsContainer"></div>
                    </div>
                    
                    
                    <div class="calendar-container hidden" id="dateSection"> 
                      <label for="filterDate">Выберите дату и время</label>
                        <h1 class="month-title"></h1>
                        <div class="buttons-container">
                          <button id="prevButton" class="arrow-button" disabled>
                            <img src="assets/form/Слева.png" alt="Назад"/>
                          </button>
                          <div id="dateButtons" class="date-buttons">
                                <!-- Кнопки с датами будут добавлены здесь через JavaScript -->
                          </div>
                          <button id="nextButton" class="arrow-button" disabled>
                              <img src="assets/form/Справа.png" alt="Вперед"/>
                          </button>
                        </div>
                    </div>
                
                    <div class="time-container hidden" id="timeSection">
                      <div class="time-buttons">
                          <!-- Здесь будут динамически добавляться кнопки со временем -->
                      </div>
                    </div>
                  <div class="btn-container">
                    <button id="add-service" class="btn" disabled>Добавить услугу</button>
                    <button id="recordButton" class="btn" disabled>Записаться</button>
                  </div>  
                  </div>
                </div>

                <div id="confirmation" class="hidden"></div>
              </div>
            <form action=""></form>  
      </div>
    </div>
  `,
})
export class BookingFormComponent {
  
}

