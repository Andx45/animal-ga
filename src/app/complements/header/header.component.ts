import { Component } from '@angular/core';
import {MatMenu, MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenu, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router){}

  home(){
    this.router.navigateByUrl('/home');
  }

  services(){
    this.router.navigateByUrl('/services')
  }

  login(){
    if (localStorage.length > 0){
      this.router.navigateByUrl('/dashboard')
    }else{
      this.router.navigateByUrl('/login')
    }
  }

}
