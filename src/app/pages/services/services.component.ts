import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CarouselImgComponent } from '../../complements/carousel-img/carousel-img.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CarouselImgComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
