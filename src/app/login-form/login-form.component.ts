import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrl: './login-form.component.scss',
  template: `
    <div *ngIf="!isCodeSent">
      <div id="form-page-1" class="form-container">
        <div class="form-box">
          <h1 class="form-title">Авторизация</h1>
          <p class="form-text">
            Для оформления онлайн-записи введите, пожалуйста, ваш номер телефона:
          </p>
          <input 
            type="text" 
            id="phone-input"
            class="phone-input"
            [(ngModel)]="phoneNumber" 
            placeholder="Введите номер телефона" 
            placeholder="+7___-___-__-__"
            maxlength="16"
          />
          <button id="continue-button" class="form-button" (click)="sendCode()">Продолжить</button>
          <p class="form-agreement">
            Продолжая, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </div>
    <div *ngIf="isCodeSent">  

      <div id="form-page-2" class="form-container">
        <div class="form-box">
          <h1 class="form-title">Авторизация</h1>
          <p class="form-text">
            Вам отправлено SMS на номер <span id="user-phone"></span>
          </p>
          <input 
            type="text" 
            [(ngModel)]="verificationCode" 
            id="sms-code"
            class="sms-code-input"
            placeholder="Введите код из SMS" 
          />
          <!-- <button id="get-sms-button" class="form-button">Получить код в SMS</button> -->
          <button id="get-sms-button" class="form-button" (click)="verifyCode()">Подтвердить</button>
        </div>
      </div>
    </div>

      
  `,
})
export class LoginFormComponent {
  phoneNumber: string = '';
  verificationCode: string = '';
  isCodeSent: boolean = false;

  constructor(private authService: AuthService, private dialogRef: MatDialogRef<LoginFormComponent>) {}

  sendCode() {
    this.authService.sendVerificationCode(this.phoneNumber).subscribe(success => {
      if (success) {
        this.isCodeSent = true;
        console.log('Код отправлен на номер:', this.phoneNumber);
      } else {
        console.log('Ошибка отправки кода');
      }
    });
  }

  verifyCode() {
    this.authService.verifyCode(this.phoneNumber, this.verificationCode).subscribe(success => {
      if (success) {
        console.log('Успешный вход');
        this.authService.login(); // Успешная авторизация
        this.dialogRef.close(); // Закрываем диалог после успешного входа
      } else {
        console.log('Ошибка входа');
      }
    });
  }
}

      /*
  
      
      let selectedPhoneNumber = null; // Хранение номера телефона

// Переключение страниц формы
const page1 = document.getElementById("form-page-1");
const page2 = document.getElementById("form-page-2");

// Элементы первой страницы
const phoneInput = document.getElementById("phone-input");
const continueButton = document.getElementById("continue-button");

// Элементы второй страницы
const userPhoneDisplay = document.getElementById("user-phone");
const smsCodeInput = document.getElementById("sms-code");
const getSmsButton = document.getElementById("get-sms-button");

// Маска для ввода телефона
phoneInput.addEventListener("input", (event) => {
    // Удаляем всё, кроме цифр
    let value = event.target.value.replace(/\D/g, "");
  
    // Если номер начинается не с "7", добавляем "7" в начало
    if (!value.startsWith("7")) {
      value = "7" + value;
    }
  
    // Ограничиваем длину номера до 11 цифр (с учётом "7" в начале)
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
  
    // Форматируем в формате +7 902-913-55-28
    const formattedValue = value
      .replace(/^7/, "+7 ") // Добавляем + перед первой 7
      .replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "$1-$2-$3-$4");
  
    // Устанавливаем отформатированное значение в поле ввода
    event.target.value = formattedValue;
  });
  

// Переход на вторую страницу
continueButton.addEventListener("click", () => {
  const phoneValue = phoneInput.value;

  // Проверка на корректность ввода телефона
  const phoneRegex = /^\+7 \d{3}-\d{3}-\d{2}-\d{2}$/;
  if (!phoneRegex.test(phoneValue)) {
    alert("Введите корректный номер телефона!");
    return;
  }

  // Нормализуем номер телефона (убираем +, пробелы, дефисы)
  const normalizedPhone = phoneValue.replace(/[^\d]/g, "");
  selectedPhoneNumber = normalizedPhone; // Сохраняем телефон
  checkOrCreateClient(normalizedPhone);
});


// Функция проверки телефона в базе и создания клиента
function checkOrCreateClient(phone) {
    console.log("Проверка телефона в базе:", phone);
  
    fetch(`http://localhost:3000/clients?phone=${encodeURIComponent(phone)}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 404) {
          console.log("Клиент не найден, создаем нового");
          createClient(phone);
        } else if (response.ok) {
          return response.json();
        } else {
          throw new Error("Ошибка при проверке клиента");
        }
      })
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          console.log("Данные клиента пусты, создаем нового клиента");
          createClient(phone);
        } else {
          console.log("Клиент найден:", data);
          switchToPage2(phone);
        }
      })
      .catch((error) => console.error("Ошибка:", error));
  }

// Функция создания нового клиента
function createClient(phone) {
    const newClient = {
        fio_client: "", // Оставляем пустым, ФИО будет заполнено на странице записи
        phone_client: phone,
        gender: null, // Пол можно задать позже, если необходимо
        password: null, // Или задайте значение по умолчанию
        authorization_date: new Date().toISOString().split('T')[0] // Текущая дата в формате YYYY-MM-DD
    };

  fetch("http://localhost:3000/clients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newClient),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при создании клиента");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Клиент создан:", data);
      switchToPage2(phone);
    })
    .catch((error) => console.error("Ошибка создания клиента:", error));
}

// Функция переключения на вторую страницу
function switchToPage2(phone) {
  userPhoneDisplay.textContent = phone; // Отображаем телефон на второй странице
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
}

// Обработка получения кода из SMS
getSmsButton.addEventListener("click", handleSmsCode);

// Добавляем обработчик для Enter на поле SMS-кода
smsCodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSmsCode();
  }
});

// Функция обработки SMS-кода
function handleSmsCode() {
  const smsCode = smsCodeInput.value.trim();

  if (smsCode.length === 0) {
    alert("Введите код из SMS!");
    return;
  }

  console.log("Код из SMS:", smsCode);
  alert("Код подтверждения принят!");
  openNextPage(); // Переход на другую страницу
}

// Функция перехода на следующую страницу
function openNextPage() {
  window.location.href = "/next-page.html"; // Укажите путь к следующей странице
}
 */
      
