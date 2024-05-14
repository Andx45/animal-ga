import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-carousel-img',
  standalone: true,
  imports: [NgbCarousel, NgbModule, CommonModule],
  templateUrl: './carousel-img.component.html',
  styleUrl: './carousel-img.component.scss'
})
export class CarouselImgComponent {
  images: any[] = [];
  isMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    // Observar el cambio en el tamaño de la pantalla
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
        this.images = this.img_mobile;
      } else {
        this.isMobile = false;
        this.images = this.img_desktop;
      }
    });
  }

  img_desktop: any[] = [
    { name: '../../../assets/img/head/banner2.jpg', caption: 'Info' },
    { name: '../../../assets/img/head/castrar_banner.jpg', caption: 'Castraciones' },
    { name: '../../../assets/img/head/banner_bath.jpg', caption: 'Grooming' }
  ];

  img_mobile: any[] = [
    { name: '../../../assets/img/head/mobile/banner_mobile.jpg', caption: 'Info' },
    { name: '../../../assets/img/head/mobile/castrar_mobile.jpg', caption: 'Castraciones' },
    { name: '../../../assets/img/head/mobile/bath_mobile.jpg', caption: 'Grooming' }
  ];
}
