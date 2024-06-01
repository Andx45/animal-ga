import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Appointment {
  id: number;
  ownerName: string;
  petName: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'ownerName', 'petName', 'date', 'time', 'actions'];
  dataSource = new MatTableDataSource<Appointment>();

  selectedMonth: string = '';
  selectedYear: string = '';

  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  years: string[] = ['2023', '2024', '2025', '2026', '2027'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.http.get<any>('https://localhost:44374/api/rest/listarReservaciones')
      .subscribe(data => {
        const appointmentList = data.map((appointment: any) => ({
          id: appointment.id_reserva,
          ownerName: appointment.nombre_usuario,
          petName: appointment.nombre_mascota,
          date: appointment.Fecha,
          time: appointment.Hora
        }));
        this.dataSource.data = appointmentList;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByMonthAndYear() {
  }

  editAppointment(appointment: Appointment) {
    console.log('Edit appointment:', appointment);
  }

  deleteAppointment(appointment: Appointment) {
    console.log('Delete appointment:', appointment);
  }
}