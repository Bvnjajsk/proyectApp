import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 5000, // Tiempo en milisegundos para el autoplay
      disableOnInteraction: false
    }
  };

  constructor(private router: Router) { }

  viewProfile() {
    this.router.navigate(['/profile']);
  }
}

