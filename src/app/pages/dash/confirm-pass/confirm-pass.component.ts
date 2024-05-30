import { Component } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AccountComponent } from '../account/account.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-pass',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './confirm-pass.component.html',
  styleUrl: './confirm-pass.component.scss'
})
export class ConfirmPassComponent {
  constructor(private router: Router) {}

  account(){
    this.router.navigateByUrl('/dashboard/account');
  }
}
