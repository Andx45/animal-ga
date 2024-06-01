import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

interface Product {
  id_producto: number;
  nombre_p: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-galery-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule, HttpClientModule],
  templateUrl: './galery-products.component.html',
  styleUrls: ['./galery-products.component.scss']
})
export class GaleryProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ 'Lista Productos': Product[] }>('https://localhost:44374/api/rest/listarProducto')
      .subscribe(data => {
        this.products = data['Lista Productos'];
      });
  }
}
