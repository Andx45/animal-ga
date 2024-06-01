import { Component, OnInit } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Mascota {
  id_mascota: number;
  nombre_m: string;
  raza: string;
  fecha_nacimiento: string;
  sexo: string;
  color: string;
  especie: string;
  dpi: number;
}


@Component({
  selector: 'app-reg-appointment',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './reg-appointment.component.html',
  styleUrl: './reg-appointment.component.scss'
})

export class RegAppointmentComponent implements OnInit{
  appointmentData: Appointment = {} as Appointment;
  mascotas: Mascota[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  registerAppointment(){
    const appointmentRegister: Appointment = {
      Fecha: this.appointmentData.Fecha,
      Dpi: this.appointmentData.Dpi,
      IdMascota: this.appointmentData.IdMascota,
      Hora: this.appointmentData.Hora,
      Estado: this.appointmentData.Estado
    }

    const requestBody = {
      fecha: appointmentRegister.Fecha,
      dpi: localStorage.getItem('dpi'),
      id_mascota: appointmentRegister.IdMascota,
      estado: 1,
      hora: appointmentRegister.Hora
    }

    this.http.post('https://localhost:44374/api/rest/insertarReservacion', requestBody).subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res);
        if (res && res.respuesta === 1) {
          alert('Cita registrada correctamente');
        } else {
          alert('Error al registrar la Cita');
        }
      },
      error: (err) => {
        console.error('Error en la solicitud HTTP:', err);
        alert('Ocurrió un error al registrar la cita');
      }
    });

      this.dialog.closeAll();

  }
    
  getMascotas(dpi: number) {
    this.http.get<any>(`https://localhost:44374/api/rest/listarMascotaDpi/${dpi}`)
      .subscribe(response => {
        this.mascotas = response['Lista Mascota'] || [];
      });
  }

  ngOnInit() {
    this.getMascotas(1010); 
  }
}


export class Appointment{
  Fecha?: string;
  Dpi?: number;
  IdMascota?: string;
  Hora?: string;
  Estado?: string;
}
