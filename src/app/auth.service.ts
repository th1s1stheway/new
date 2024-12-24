import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private verificationCodes: { [key: string]: string } = {};

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Метод для проверки статуса авторизации
  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  // Метод для авторизации
  login() {
    this.isAuthenticatedSubject.next(true);
  }

  // Метод для выхода
  logout() {
    this.isAuthenticatedSubject.next(false);
  }

  // Метод для отправки кода на телефон
  sendVerificationCode(phoneNumber: string): Observable<boolean> {
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString(); // Генерация кода
    this.verificationCodes[phoneNumber] = verificationCode;

    console.log(`Код ${verificationCode} отправлен на номер ${phoneNumber}`);
    return of(true); // Здесь вы можете интегрировать реальную логику отправки SMS
  }

  // Метод для проверки кода
  verifyCode(phoneNumber: string, code: string): Observable<boolean> {
    const isValid = this.verificationCodes[phoneNumber] === code;
    if (isValid) {
      delete this.verificationCodes[phoneNumber]; // Удаляем код после успешной проверки
      return of(true);
    }
    return of(false);
  }
}