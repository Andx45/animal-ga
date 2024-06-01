import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre_p: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-reg-product',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './reg-product.component.html',
  styleUrls: ['./reg-product.component.scss']
})
export class RegProductComponent {
  productData: Producto = {} as Producto;
  selectedFile: File | null = null;

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Assuming you want to save the file path as a string
      this.productData.imagen = file.name;
    }
  }

  registerProduct() {
    const productRegister: Producto = {
      nombre_p: this.productData.nombre_p,
      descripcion: this.productData.descripcion,
      precio: this.productData.precio,
      imagen: this.productData.imagen
    };

    const requestBody = {
      nombre_p: productRegister.nombre_p,
      descripcion: productRegister.descripcion,
      precio: productRegister.precio,
      imagen: productRegister.imagen
    };

    this.http.post('https://localhost:44374/api/rest/insertarProducto', requestBody).subscribe({
      next: (res: any) => {
        console.log('Respuesta del servidor:', res);
        if (res && res.respuesta === 1) {
          alert('Producto registrado correctamente');
        } else {
          alert('Error al registrar el producto');
        }
      },
      error: (err) => {
        console.error('Error en la solicitud HTTP:', err);
        alert('Ocurrió un error al registrar el producto');
      }
    });

    this.dialog.closeAll();
  }
}
