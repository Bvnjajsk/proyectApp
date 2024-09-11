import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,private navCtrl: NavController, private router: Router
  ) {}

  ngOnInit() {
    // Inicialización del formulario en ngOnInit
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      // Aquí puedes agregar la lógica para verificar las credenciales
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user.username === username && user.password === password) {
        this.router.navigate(['/home']);
        alert('Logeado con Exito!');
    }else {
      alert('Credenciales Invalidas');
  }}}

  onRegister() {
    // Redirigir al formulario de registro
    this.navCtrl.navigateForward('/register');
  }
}




  /*constructor(private router: Router, private sessionManager: SessionManager) { }
    user: string = '';
    password: string = '';

  ngOnInit() {
  }

  onLoginButtonPressed() {
    if(this.sessionManager.performLogin(this.user, this.password)) {
      this.router.navigate(['/home'])
    } else {
      this.user=''
      this.password=''
      alert('Las credenciales ingresadas son inválidas.')
    }
  }

  onRegisterButtonPressed() {
    this.router.navigate(['/register'])
  }*/



