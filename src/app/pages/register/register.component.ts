import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  regObj: Register = {} as Register;

  constructor(private router: Router, private http: HttpClient) { }

  register() {
    const registerData: Register = {
      Nombre: this.regObj.Nombre,
      Apellido: this.regObj.Apellido,
      FechaNac: this.regObj.FechaNac,
      Mail: this.regObj.Mail,
      Dpi: this.regObj.Dpi,
      Password: this.regObj.Password,
      Rol: this.regObj.Rol,
      Telefono: this.regObj.Telefono,
      Direccion: this.regObj.Direccion
    };

    const requestBody = {
      dpi: registerData.Dpi,
      nombre: registerData.Nombre,
      correo_electronico: registerData.Mail,
      fecha_nacimiento: registerData.FechaNac,
      telefono: registerData.Telefono,
      direccion: registerData.Direccion,
      contraseña: registerData.Password,
      id_rol: 1
    };


    this.http.post('https://localhost:44374/api/rest/insertaUsuario', requestBody).subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res);
        if (res && res.respuesta === 1) {
          alert('Insertado correctamente')
          this.router.navigateByUrl('/login');
        } else {
          alert(`Error al insertar usuario`);
        }
      },
      error: (err) => {
        console.error('Error en la solicitud HTTP:', err);
        alert(`Ocurrió un error en la inserción}`);
      }
    });
  }
}

export class Register {
  Nombre?: string;
  Apellido?: string;
  FechaNac?: string;
  Mail?: string;
  Dpi?: number;
  Password?: string;
  Rol?: number;
  Telefono?: string;
  Direccion?: string;
}