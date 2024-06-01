import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RegProductComponent } from '../reg-product/reg-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  url: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'url', 'actions'];
  dataSource = new MatTableDataSource<Product>();

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any>('https://localhost:44374/api/rest/listarProducto')
      .subscribe(data => {
        const productList = data['Lista Productos'].map((product: any) => ({
          id: product.id_producto,
          name: product.nombre_p,
          description: product.descripcion,
          price: product.precio,
          url: product.imagen
        }));
        this.dataSource.data = productList;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editProduct(product: Product) {
    console.log('Edit product:', product);
  }

  deleteProduct(product: Product) {
    console.log('Delete product:', product);
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}