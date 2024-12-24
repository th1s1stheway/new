document.addEventListener('DOMContentLoaded', function () {
    const optionsContainer = document.getElementById('optionsContainer');
    const filterInput = document.getElementById('filterService');
    const staffOptionsContainer = document.getElementById('staffOptionsContainer');
    const filterStaffInput = document.getElementById('filterStaff');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const dateButtonsContainer = document.getElementById('dateButtons');
    const dateSection = document.getElementById('dateSection'); // Блок с датами
    const recordButton = document.getElementById('recordButton'); // Объявляем кнопку "Записаться"
    const clientNameInput = document.getElementById('client-name');
   
    let selectedFioClient = null;
    let selectedServiceId = null; // ID услуги
    let selectedStaffId = null; // ID мастера
    let selectedStaffFio = null; // ФИО мастера 
    let selectedDate = null; // Выбранная дата
    let selectedTime = null; // Выбранное время
    let currentIndex = 0;
    let dates = [];
  
    //ФИО
    // Проверка ввода только текста
      clientNameInput.addEventListener('input', function () {
      const invalidCharacters = /[^а-яА-ЯёЁa-zA-Z\s-]/g; // Регулярное выражение для недопустимых символов
      this.value = this.value.replace(invalidCharacters, ''); // Удаляем недопустимые символы
      });
  
    //УСЛУГИ
    // Функция для поиска услуг на основе пользовательского ввода
    function searchServices() {
        const searchQuery = filterInput.value; // Используем значение из поля ввода
        if (searchQuery.length === 0) {
            optionsContainer.style.display = 'none'; // Скрываем контейнер, если ничего не введено
            return;
        }
        fetch(`http://localhost:3000/services/?search=${searchQuery}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сервер не отвечает');
                }
                return response.json();
            })
            .then(data => displayServices(data))
            .catch(error => console.error('Салон не оказывает данную услугу', error));
    }
  
    // Функция для отображения услуг
    function displayServices(services) {
        optionsContainer.innerHTML = '';
        if (services.length > 0) {
            optionsContainer.style.display = 'block';
            services.forEach(service => {
                optionsContainer.innerHTML += `
                    <div class="option" data-service-id="${service.service_id}" style="cursor: pointer;">
                        ${service.service_name.trim()} - ${service.service_price}₽
                    </div>
                `;
            });
            addServiceClickHandlers();
        } else {
            optionsContainer.style.display = 'none';
        }
    }
  
    // Добавляем обработчики кликов на услуги
    function addServiceClickHandlers() {
        const serviceOptions = document.querySelectorAll('.option');
        serviceOptions.forEach(option => {
            option.addEventListener('click', function() {
                filterInput.value = this.textContent.trim(); // Удаляем лишние пробелы
                selectedServiceId = this.dataset.serviceId; // Сохраняем ID услуги
                optionsContainer.style.display = 'none';
                staffOptionsContainer.innerHTML = ''; // Очищаем список мастеров
                filterStaffInput.value = ''; // Очищаем поле мастера
                selectedStaffId = null; // Сбрасываем ID мастера
                console.log('Выбранная услуга ID:', selectedServiceId);
  
                // Записываем ФИО клиента в переменную
                selectedFioClient = clientNameInput.value.trim();
                console.log('ФИО клиента:', selectedFioClient);
  
                // Скрываем блок с датами при выборе услуги
                dateSection.classList.add('hidden');
            });
        });
    }
  
    // Обработчик для ввода услуги
    filterInput.addEventListener('input', searchServices);
  
    // Закрываем список при клике вне его
    document.addEventListener('click', function(event) {
        if (!filterInput.contains(event.target) && !optionsContainer.contains(event.target)) {
            optionsContainer.style.display = 'none';
        }
    });
  
    //МАСТЕРА
    // Функция для поиска мастеров на основе выбранной услуги
    function searchStaffByService(serviceId) {
        fetch(`http://localhost:3000/staffService/${serviceId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сервер не отвечает');
                }
                return response.json();
            })
            .then(data => displayStaff(data))
            .catch(error => console.error('Ошибка при получении мастеров:', error));
    }
  
    // Функция для отображения мастеров
    function displayStaff(staffMembers) {
        staffOptionsContainer.innerHTML = '';
        if (staffMembers.length > 0) {
            staffOptionsContainer.style.display = 'block';
            staffMembers.forEach(staff => {
                staffOptionsContainer.innerHTML += `
                    <div class="staffOption" data-staff-id="${staff.staff_id}" data-staff-fio="${staff.fio_staff.trim()}" style="cursor: pointer;">
                    ${staff.fio_staff.trim()} - ${staff.post.trim()}
                </div>
                `;
            });
            staffOptionsContainer.style.display = 'block'; // Показываем список мастеров
            addStaffClickHandlers();
        } else {
            staffOptionsContainer.innerHTML = '<div>Нет доступных мастеров</div>';
            staffOptionsContainer.style.display = 'block'; // Показываем сообщение
        }
    }
  
        // Добавляем обработчики кликов на мастеров
    function addStaffClickHandlers() {
        const staffOptions = document.querySelectorAll('.staffOption');
        staffOptions.forEach(option => {
            option.addEventListener('click', function() {
                selectedStaffId = this.dataset.staffId; // Сохраняем ID мастера
                selectedStaffFio = this.dataset.staffFio; // Сохраняем ФИО мастера
                filterStaffInput.value = selectedStaffFio; // Устанавливаем ФИО в поле ввода
                staffOptionsContainer.style.display = 'none';
                console.log('Выбранный мастер:', { id: selectedStaffId, fio: selectedStaffFio });
            
            // Получаем доступные даты для выбранного мастера
            fetchAvailableDates(selectedServiceId, selectedStaffId);
            });
        });
    }
  
    // Обработчик для открытия списка мастеров
    filterStaffInput.addEventListener('click', function() {
        if (selectedServiceId) {
            if (staffOptionsContainer.style.display === 'block') {
                staffOptionsContainer.style.display = 'none'; // Скрываем, если уже открыт
            } else {
                searchStaffByService(selectedServiceId); // Загружаем мастеров только при открытии
            }
        } else {
            alert('Сначала выберите услугу');
        }
    });
    
    // Закрываем список при клике вне его
    document.addEventListener('click', function(event) {
        if (!filterStaffInput.contains(event.target) && !staffOptionsContainer.contains(event.target)) {
            staffOptionsContainer.style.display = 'none';
        }
    });
  
    //ДАТА
    // Функция для получения данных с сервера
    function fetchAvailableDates(serviceId, staffId) {
    // Проверяем, переданы ли selectedStaffId и selectedServiceId
    if (!serviceId || !staffId) {
      console.error('ID мастера или ID услуги не переданы');
      return;
  }
  
    fetch(`http://localhost:3000/staffService/${serviceId}/${staffId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сервер не отвечает');
            }
            return response.json();
        })
        .then(data => {
          dates = Object.keys(data); // Получаем массив дат из ответа
          renderDateButtons();
          dateSection.classList.remove('hidden'); // Показываем блок с датами
      })
        .catch(error => console.error(error));
  }
  
  // Массив с названиями месяцев
  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  
  // Флаг для отслеживания, установлен ли заголовок месяца
  let isMonthTitleSet = false;
  
  // Функция для изменения названия месяца
  function updateMonthTitle(dateStr) {
    const [day, month, year] = dateStr.split('-'); // Парсим дату (день, месяц, год)
    const monthIndex = parseInt(month, 10) - 1; // Индекс месяца (0-11)
    const newMonthTitle = monthNames[monthIndex]; // Название месяца
  
    const monthTitleElement = document.querySelector('.month-title'); // Элемент с заголовком месяца
    if (monthTitleElement.textContent !== newMonthTitle) {
        monthTitleElement.textContent = newMonthTitle; // Обновляем текст
    }
  }
  
  // Функция для отображения кнопок с датами
  function renderDateButtons() {
    dateButtonsContainer.innerHTML = ''; // Очищаем контейнер
  
    // Проверяем, есть ли даты в списке
    if (dates.length > 0 && !isMonthTitleSet) {
      // Устанавливаем заголовок месяца на основе первой отображаемой даты только один раз
      const firstDate = dates[currentIndex];
      updateMonthTitle(firstDate);
      isMonthTitleSet = true; // Устанавливаем флаг, чтобы больше не обновлять месяц автоматически
    }
  
    // Отображаем 7 ближайших дат
    for (let i = 0; i < 7; i++) {
        if (dates[currentIndex + i]) {
            const dateStr = dates[currentIndex + i]; // Получаем строку даты
            const [day, month, year] = dateStr.split('-'); // Разделяем строку на части
            const formattedDate = `${day} ${getDayName(new Date(year, month - 1, day))}`; // Форматируем дату
            
            const button = document.createElement('button');
            button.className = 'date-button';
            button.textContent = formattedDate;
  
            // Обработчик нажатия на кнопку даты
            button.onclick = () => {
              // Сброс стилей на всех кнопках
              const allButtons = document.querySelectorAll('.date-button');
              allButtons.forEach(btn => {
                  btn.classList.remove('selected'); // Удаляем класс 'selected'
              });
  
              // Добавляем класс 'selected' для выбранной кнопки
              button.classList.add('selected');
  
              // Обновляем заголовок месяца
              updateMonthTitle(dateStr);
              
              // Сохраняем выбранную дату
              selectedDate = dateStr; // Сохраняем строку даты в переменной
              console.log(`Выбранная дата: ${selectedDate}`); 
  
              // Запрашиваем доступные временные слоты после выбора даты
              fetchAvailableSlots();
          };
            dateButtonsContainer.appendChild(button);
        }
    }
  
    // Управление состоянием кнопок
    prevButton.disabled = currentIndex === 0; // Деактивируем кнопку "Назад", если на первой странице
    nextButton.disabled = currentIndex + 7 >= dates.length; // Деактивируем кнопку "Вперед", если достигнут конец дат
  }
  
  // Функция для получения названия дня недели
  function getDayName(date) {
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return daysOfWeek[date.getDay()]; // Получаем день недели
  }
  
  // Обработчик для кнопки "Назад"
  prevButton.onclick = () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        renderDateButtons();
    }
  };
  
  // Обработчик для кнопки "Вперед"
  nextButton.onclick = () => {
    if (currentIndex + 7 < dates.length) {
        currentIndex += 1;
        renderDateButtons();
    }
    // Показываем кнопку "Назад" после первого нажатия на "Вперед"
    if (currentIndex > 0) {
      prevButton.style.display = 'inline-block'; // Показываем кнопку "Назад"
  }
  };
  
  // Инициализация отображения кнопок
  renderDateButtons();
  
  // Скрываем блок с датами по умолчанию
  dateSection.classList.add('hidden');
  
  //ВРЕМЯ
  // Функция для получения доступных временных слотов
  function fetchAvailableSlots() {
    if (!selectedServiceId || !selectedStaffId || !selectedDate) {
        console.error('Не выбраны услуга, мастер или дата.');
        return;
    }
  
    fetch(`http://localhost:3000/registry/${selectedServiceId}/${selectedStaffId}/${selectedDate}`)
        .then(response => response.json())
        .then(data => {
            const timeSection = document.getElementById('timeSection');
            const timeButtonsContainer = document.querySelector('.time-buttons');
  
            // Очищаем предыдущие кнопки
            timeButtonsContainer.innerHTML = '';
  
            if (data.available_slots.length > 0) {
                // Генерируем кнопки со временем
                data.available_slots.forEach(slot => {
                    // Предполагаем, что slot имеет формат "HH:MM:SS"
                    const [hours, minutes] = slot.split(':'); // Извлекаем часы и минуты
                    const formattedTime = `${hours}:${minutes}`; // Форматируем время без секунд
                    
                    const button = document.createElement('div');
                    button.className = 'time-button';
                    button.textContent = formattedTime; // Устанавливаем текст кнопки без секунд
                    
                    // Добавляем обработчик события для выбора времени
                    button.addEventListener('click', function() {
                        selectedTime = formattedTime; // Сохраняем выбранное время
                        console.log('Выбранное время:', selectedTime); // Выводим в консоль для проверки
  
                        // Дополнительная логика для выделения выбранной кнопки
                        const buttons = document.querySelectorAll('.time-button');
                        buttons.forEach(btn => btn.classList.remove('selected')); // Убираем выделение у всех кнопок
                        button.classList.add('selected'); // Выделяем текущую кнопку
  
                        // Обновляем состояние кнопки "Записаться"
                        updateRecordButtonState();
                    });
  
                    timeButtonsContainer.appendChild(button);
                });
  
                // Показываем блок со временем
                timeSection.classList.remove('hidden');
            } else {
                console.log('Нет доступных временных слотов.');
                timeSection.classList.add('hidden'); // Скрываем блок, если нет слотов
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
  }
  
  //ЗАПИСАТЬСЯ
  // Функция для обновления состояния кнопки "Записаться"
  function updateRecordButtonState() {
    const recordButton = document.getElementById('recordButton'); // Предполагается, что у кнопки "Записаться" есть ID 'recordButton'
    if (selectedServiceId && selectedStaffId && selectedDate && selectedTime && selectedFioClient){
        recordButton.disabled = false; // Активируем кнопку, если все параметры выбраны
    } else {
        recordButton.disabled = true; // Деактивируем кнопку, если что-то не выбрано
    }
  }
  
  // Обработчик события для кнопки "Записаться"
  recordButton.addEventListener('click', function() {
      // Проверяем, выбраны ли все необходимые параметры
      if (!selectedServiceId || !selectedStaffId || !selectedDate || !selectedTime || !selectedFioClient) {
          return; // Выходим из функции, если что-то не выбрано
      }
  
      // Создаем объект с данными для отправки на сервер
      const data = {
          client_id: 1, // Замените на реальный ID клиента
          fio: selectedFioClient, 
          staff_id: selectedStaffId,
          service_id: selectedServiceId,
          date: selectedDate,
          time: selectedTime
      };
  
      // Отправляем данные на сервер
      fetch('http://localhost:3000/registry', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Ошибка при создании записи');
          }
          return response.json();
      })
      .then(data => {
          console.log('Успех:', data);
      })
      .catch(error => {
          console.error('Ошибка:', error);
      });
  });
  
  });
  
  
  
  