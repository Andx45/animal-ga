import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, NgLocaleLocalization, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatExpansionModule} from '@angular/material/expansion';
import {RouterOutlet} from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ConfirmPassComponent } from '../dash/confirm-pass/confirm-pass.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatExpansionModule,
    MatDialogModule,
    ConfirmPassComponent,
    CommonModule
  ]
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog){}
  private breakpointObserver = inject(BreakpointObserver);

  isAdmin: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    panelOpenState = false;

  openPass() {
    const dialogRef = this.dialog.open(ConfirmPassComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
    const rol = localStorage.getItem('rol');
    if (rol === '1') {
      this.isAdmin = false;
    } else if (rol === '0') {
      this.isAdmin = true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
