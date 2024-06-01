import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegPetsComponent } from '../reg-pets/reg-pets.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


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
  selector: 'app-pets',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RegPetsComponent, MatDialogModule, CommonModule, HttpClientModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.scss'
})

export class PetsComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  calcularEdad(fecha_nacimiento: string): number {
    const diff = Date.now() - new Date(fecha_nacimiento).getTime();
    const age = new Date(diff).getUTCFullYear() - 1970;
    return age;
  }
  

  ngOnInit() {
    this.getMascotas(1010); 
  }

  getMascotas(dpi: number) {
    this.http.get<any>(`https://localhost:44374/api/rest/listarMascotaDpi/${dpi}`)
      .subscribe(response => {
        this.mascotas = response['Lista Mascota'] || [];
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegPetsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getMascotas(1010);
    });
  }
}
