import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIcon, MatIconModule } from '@angular/material/icon';

interface User {
  dpi: number;
  nombre: string;
  correo_electronico: string;
  fecha_nacimiento: string;
  telefono: string;
  id_rol: number;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  displayedColumns: string[] = ['dpi', 'nombre', 'correo', 'telefono', 'edad', 'id_rol', 'actions'];
  dataSource = new MatTableDataSource<User>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<{ 'Lista Usuario': User[] }>('https://localhost:44374/api/rest/listarUsuario')
      .subscribe(data => {
        this.dataSource.data = data['Lista Usuario'].map(user => ({
          dpi: user.dpi,
          nombre: user.nombre,
          correo_electronico: user.correo_electronico,
          fecha_nacimiento: user.fecha_nacimiento,
          telefono: user.telefono,
          id_rol: user.id_rol
        }));
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAge(birthDateString: string): number {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  editAppointment(user: User) {
    console.log('Edit appointment:', user);
  }

  deleteAppointment(user: User) {
    console.log('Delete appointment:', user);
  }
}
