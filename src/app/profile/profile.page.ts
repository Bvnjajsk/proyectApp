import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage implements OnInit {
  username: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Recupera el nombre del usuario desde localStorage
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.username = parsedUser.username;
    }
  }

  logout() {
    // Limpia la información de sesión y redirige al login
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  goHome() {
    // Navega al inicio
    this.router.navigate(['/home']);
  }
}
