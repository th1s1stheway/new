import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';
import { FooterComponent } from '../../../footer/footer.component';

@Component({
  selector: 'app-pedicure',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pedicure.component.html',
  styleUrl: './pedicure.component.scss'
})
export class PedicureComponent {

}
