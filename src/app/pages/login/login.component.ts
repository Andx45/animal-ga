import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RegisterComponent, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginObj: Login = {} as Login;

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    const loginData: Login = {
      Dpi: this.loginObj.Dpi,
      Password: this.loginObj.Password
    };

    const requestBody = {
      dpi: loginData.Dpi,
      contraseña: loginData.Password
    };

    this.http.post('https://localhost:44374/api/rest/validaUsuario', requestBody).subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res);
        if (res && res.respuesta === 1) {
          if (loginData.Dpi !== undefined && loginData.Dpi !== null) {
            localStorage.setItem('dpi', loginData.Dpi.toString());
            localStorage.setItem('rol', res.rol);
          }
          this.router.navigateByUrl('/dashboard');
        } else {
          alert(`Error en la autenticación: Credenciales incorrectas\nDPI: ${loginData.Dpi}\nContraseña: ${loginData.Password}`);
        }
      },
      error: (err) => {
        console.error('Error en la solicitud HTTP:', err);
        alert(`Ocurrió un error en la autenticación. Por favor, intenta de nuevo más tarde.\nDPI: ${loginData.Dpi}\nContraseña: ${loginData.Password}`);
      }
    });
  }
}

export class Login {
  Dpi?: number;
  Password?: string;
}