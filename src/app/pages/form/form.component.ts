import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss' 
})
export class FormComponent /*implements OnInit*/ {
  /*
  options: any[] = [];
  staffOptions: any[] = [];
  dates: string[] = [];
  selectedFioClient: string | null = null;
  selectedServiceId: string | null = null;
  selectedStaffId: string | null = null;
  selectedDate: string | null = null;
  selectedTime: string | null = null;
  currentIndex: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onClientNameInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const invalidCharacters = /[^а-яА-ЯёЁa-zA-Z\s-]/g;
    input.value = input.value.replace(invalidCharacters, '');
    this.selectedFioClient = input.value.trim();
  }

  searchServices(searchQuery: string): void {
    if (searchQuery.length === 0) {
      this.options = [];
      return;
    }
    this.http.get<any[]>(`http://localhost:3000/services/?search=${searchQuery}`).subscribe(
      data => this.displayServices(data),
      error => console.error('Салон не оказывает данную услугу', error)
    );
  }

  displayServices(services: any[]): void {
    this.options = services;
  }

  selectService(serviceId: string): void {
    this.selectedServiceId = serviceId;
    this.staffOptions = []; // Reset staff options
    this.selectedStaffId = null; // Reset selected staff
    this.fetchStaffByService(serviceId);
  }

  fetchStaffByService(serviceId: string): void {
    this.http.get<any[]>(`http://localhost:3000/staffService/${serviceId}`).subscribe(
      data => this.displayStaff(data),
      error => console.error('Ошибка при получении мастеров:', error)
    );
  }

  displayStaff(staffMembers: any[]): void {
    this.staffOptions = staffMembers;
  }

  selectStaff(staffId: string): void {
    this.selectedStaffId = staffId;
    this.fetchAvailableDates(this.selectedServiceId!, staffId);
  }

  fetchAvailableDates(serviceId: string, staffId: string): void {
    this.http.get<string[]>(`http://localhost:3000/staffService/${serviceId}/${staffId}`).subscribe(
      data => {
        this.dates = Object.keys(data);
        // Additional logic to render date buttons can be added here
      },
      error => console.error('Ошибка при получении доступных дат:', error)
    );
  }
  */
}
