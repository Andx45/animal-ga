import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegAppointmentComponent } from '../reg-appointment/reg-appointment.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Reserva {
  id_reserva: number;
  id_mascota: number;
  nombre_mascota: string;
  dpi_usuario: number;
  nombre_usuario: string;
  Fecha: string;
  Hora: string;
}

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogModule, HttpClientModule, CommonModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})

export class AppointmentComponent implements OnInit {
  reservas: Reserva[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.getReservas(Number(localStorage.getItem('dpi')));
  }

  getReservas(dpi: number) {
    this.http.get<Reserva[]>(`https://localhost:44374/api/rest/listarReservacionPorDPI/${dpi}`)
      .subscribe(reservas => {
        this.reservas = reservas || [];
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegAppointmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getReservas(Number(localStorage.getItem('dpi')));
    });
  }
}