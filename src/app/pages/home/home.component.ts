import { Component } from '@angular/core';
import { HeaderComponent} from '../../complements/header/header.component';
import { FooterComponent } from '../../complements/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title='gmaps';
  position = {
    lat: 14.58320401886148,
    lng: -90.6061193999468
  };

  label = {
    color: 'red',
    text: 'Animal Garden'
  }
}
