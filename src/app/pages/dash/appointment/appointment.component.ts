import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegAppointmentComponent } from '../reg-appointment/reg-appointment.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog() {
    const dialogRef = this.dialog.open(RegAppointmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 }
