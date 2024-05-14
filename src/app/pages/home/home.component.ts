import { Component } from '@angular/core';
import { HeaderComponent } from '../../complements/header/header.component';
import { FooterComponent } from '../../complements/footer/footer.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapLocationComponent } from '../../complements/map-location/map-location.component';
import { CarouselImgComponent } from '../../complements/carousel-img/carousel-img.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, GoogleMapsModule, MapLocationComponent, CarouselImgComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
