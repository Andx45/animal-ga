import { Component } from '@angular/core';
import { HeaderComponent} from '../../complements/header/header.component';
import { FooterComponent } from '../../complements/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
