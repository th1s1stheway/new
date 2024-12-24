import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImageViewerComponent } from "../../image-viewer/image-viewer.component";
import { ImageViewerAcademyComponent } from "../../image-viewer-academy/image-viewer-academy.component";
import { CommonModule } from '@angular/common';
import { ImageViewer2Component } from "../../viewers-nashi-raboti/image-viewer2/image-viewer2.component";
import { ImageViewer1Component } from "../../viewers-nashi-raboti/image-viewer1/image-viewer1.component";
import { ImageViewer3Component } from "../../viewers-nashi-raboti/image-viewer3/image-viewer3.component";
import { ImageViewer4Component } from "../../viewers-nashi-raboti/image-viewer4/image-viewer4.component";
import { ImageViewer5Component } from "../../viewers-nashi-raboti/image-viewer5/image-viewer5.component";

@Component({
  selector: 'app-nashi-raboti',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ImageViewerComponent, ImageViewerAcademyComponent, CommonModule, ImageViewer2Component, ImageViewer1Component, ImageViewer3Component, ImageViewer4Component, ImageViewer5Component],
  template: `
    <div class="wrapper">
      <app-header />
      <div class="banner-nashi-raboti banner">
        <div class="container">
          <div class="banner-academy-manicure__title banner-title">
            <h2>Работы наших мастеров</h2>
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
      <div class="primeri-rabot">
        <div class="container">
          <div class="primeri-rabot__cards">
            <div class="primeri-rabot__card">
              <button (click)="selectTab(0)">Женская стрижка</button>
            </div>
            <div class="primeri-rabot__card">
              <button (click)="selectTab(1)">Окрашивание и уход за волосами</button>
            </div>
            <div class="primeri-rabot__card">
              <button (click)="selectTab(2)">Маникюр</button>
            </div>
            <div class="primeri-rabot__card">
              <button (click)="selectTab(3)">Педикюр</button>
            </div>
            <div class="primeri-rabot__card">
              <button (click)="selectTab(4)">Мужская стрижка</button>
            </div>
          </div>
          <div class="primeri-rabot__slider">
          <div class="content">
            <div *ngIf="selectedTab === 0"><app-image-viewer1 /></div>
            <div *ngIf="selectedTab === 1"><app-image-viewer2 /> </div>
            <div *ngIf="selectedTab === 2"><app-image-viewer3 /></div>
            <div *ngIf="selectedTab === 3"><app-image-viewer4 /></div>
            <div *ngIf="selectedTab === 4"><app-image-viewer5 /></div>
          </div>
        </div>
        </div>
      </div>
      <app-footer />
    </div>
  `,
  styleUrl: './nashi-raboti.component.scss'
})
export class NashiRabotiComponent {
  selectedTab: number = 0; // Индекс выбранной вкладки (по умолчанию первая)

  // Метод для выбора вкладки
  selectTab(index: number) {
    this.selectedTab = index; // Устанавливаем индекс выбранной вкладки
  }
}
