import { Component} from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reg-pets',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './reg-pets.component.html',
  styleUrl: './reg-pets.component.scss'
})



export class RegPetsComponent {
  petData: Pet = {} as Pet;
  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) { 
  }

  registerPet() {
    const petRegister: Pet = {
      Nombre: this.petData.Nombre,
      Raza: this.petData.Raza,
      FechaNacimiento: this.petData.FechaNacimiento,
      Sexo: this.petData.Sexo,
      Color: this.petData.Color,
      Especie: this.petData.Especie,
    };


    const requestBody = {
      nombre_m: petRegister.Nombre,
      sexo: petRegister.Sexo,
      especie: petRegister.Especie,
      fecha_nacimiento: petRegister.FechaNacimiento,
      raza: petRegister.Raza,
      color: petRegister.Color,
      dpi: localStorage.getItem('dpi')
    };

    this.http.post('https://localhost:44374/api/rest/insertarMascota', requestBody).subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res);
        if (res && res.respuesta === 1) {
          alert('Mascota registrada correctamente');
        } else {
          alert('Error al registrar la mascota');
        }
      },
      error: (err) => {
        console.error('Error en la solicitud HTTP:', err);
        alert('Ocurrió un error al registrar la mascota');
      }
    });
    
    this.dialog.closeAll();
    this.router.navigateByUrl('.', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/dashboard/pets']);
  })
  }
}


export class Pet {
  Nombre?: string;
  Sexo?: string;
  Especie?: string;
  FechaNacimiento?: string;
  Raza?: string;
  Color?: string;
}
