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

export interface Appointment {
  id: number;
  ownerName: string;
  petName: string;
  date: string;
  time: string;
  type: string;
}

const APPOINTMENT_DATA: Appointment[] = [
  { id: 1, ownerName: 'John Doe', petName: 'Fido', date: '2024-05-01', time: '10:00', type: 'Consulta' },
  { id: 2, ownerName: 'Jane Smith', petName: 'Whiskers', date: '2024-05-03', time: '14:00', type: 'Vacunación' },
  { id: 3, ownerName: 'Carlos Johnson', petName: 'Buddy', date: '2024-06-10', time: '09:00', type: 'Cirugía' }
];

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
    FormsModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  displayedColumns: string[] = ['ownerName', 'petName', 'date', 'time', 'type', 'actions'];
  dataSource = new MatTableDataSource(APPOINTMENT_DATA);

  selectedMonth: string = '';
  selectedYear: string = '';

  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  years: string[] = ['2023', '2024', '2025', '2026', '2027'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterByMonthAndYear() {
    this.dataSource.filter = this.selectedMonth.toLowerCase() + this.selectedYear;
  }

  ngOnInit() {}

  editAppointment(appointment: Appointment) {
    console.log('Edit appointment:', appointment);
    // Lógica para editar la cita
  }

  deleteAppointment(appointment: Appointment) {
    console.log('Delete appointment:', appointment);
    // Lógica para eliminar la cita
  }
}
