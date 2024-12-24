import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-manicure',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './manicure.component.html',
  styleUrl: './manicure.component.scss'
})
export class ManicureComponent {

}
