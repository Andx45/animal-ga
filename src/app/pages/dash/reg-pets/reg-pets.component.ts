import { Component } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-reg-pets',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './reg-pets.component.html',
  styleUrl: './reg-pets.component.scss'
})
export class RegPetsComponent {

}
