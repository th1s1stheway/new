import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-muzh-strizhki',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './muzh-strizhki.component.html',
  styleUrl: './muzh-strizhki.component.scss'
})
export class MuzhStrizhkiComponent {

}
