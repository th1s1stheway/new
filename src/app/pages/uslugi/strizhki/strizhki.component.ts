import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-strizhki',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './strizhki.component.html',
  styleUrl: './strizhki.component.scss'
})
export class StrizhkiComponent {

}
