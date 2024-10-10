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
  username: string = '';
  constructor(private router: Router) { }
  ngOnInit() {
    // Recupera el nombre del usuario desde localStorage
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.username = parsedUser.username;
    }
  }
  viewProfile() {
    this.router.navigate(['/profile']);
  }


}

