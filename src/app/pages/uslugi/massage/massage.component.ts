import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-massage',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './massage.component.html',
  styleUrl: './massage.component.scss'
})
export class MassageComponent {

}
