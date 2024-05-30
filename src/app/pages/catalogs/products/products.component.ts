import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  url: string;
}

const PRODUCT_DATA: Product[] = [
  { id: 1, name: 'Producto 1', url: 'http://example.com/producto1' },
  { id: 2, name: 'Producto 2', url: 'http://example.com/producto2' },
  { id: 3, name: 'Producto 3', url: 'http://example.com/producto3' }
];

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'url', 'actions'];
  dataSource = new MatTableDataSource(PRODUCT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {}

  editProduct(product: Product) {
    console.log('Edit product:', product);
    // Lógica para editar el producto
  }

  deleteProduct(product: Product) {
    console.log('Delete product:', product);
    // Lógica para eliminar el producto
  }
}
