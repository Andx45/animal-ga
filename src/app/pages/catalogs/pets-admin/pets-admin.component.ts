import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Pet {
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
  selector: 'app-pets-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './pets-admin.component.html',
  styleUrls: ['./pets-admin.component.scss']
})
export class PetsAdminComponent implements OnInit {
  displayedColumns: string[] = ['id_mascota', 'nombre_m', 'raza', 'fecha_nacimiento', 'sexo', 'color', 'especie', 'dpi', 'actions'];
  dataSource = new MatTableDataSource<Pet>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPets();
  }

  fetchPets() {
    this.http.get<{ 'Lista Mascotas': Pet[] }>('https://localhost:44374/api/rest/listarMascota')
      .subscribe(data => {
        this.dataSource.data = data['Lista Mascotas'];
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editPet(pet: Pet) {
    console.log('Edit pet:', pet);
  }

  deletePet(pet: Pet) {
    console.log('Delete pet:', pet);
  }
}
