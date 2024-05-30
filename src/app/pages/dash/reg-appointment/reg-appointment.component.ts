import { Component } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reg-appointment',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './reg-appointment.component.html',
  styleUrl: './reg-appointment.component.scss'
})
export class RegAppointmentComponent {

}
