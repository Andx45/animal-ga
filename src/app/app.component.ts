import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './complements/header/header.component';
import { FooterComponent } from './complements/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MapLocationComponent} from './complements/map-location/map-location.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, MapLocationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'animal-garden';
}
