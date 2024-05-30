import { Component } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-reg-product',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './reg-product.component.html',
  styleUrl: './reg-product.component.scss'
})
export class RegProductComponent {
}
