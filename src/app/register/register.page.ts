import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {}

  passwordMatchValidator(form: FormGroup): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    // Check if either control is null
    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value
      ? null
      : { mismatch: true };
  }

  onRegister() {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;

      // Verificar que las contraseñas coincidan
      if (password !== this.registerForm.value.confirmPassword) {
        alert('¡Las contraseñas no coinciden!');
        return;
      }

      // Guardar datos en localStorage
      localStorage.setItem('user', JSON.stringify({ username, password }));

      // Redirigir al módulo de Home
      this.router.navigate(['/home']);
      alert('Registrado con exito :D' ) ;
    } else {
      alert('¡El formulario no es válido!');
    }
  }
  goBack() {
    this.router.navigate(['/login']); // Cambia '/login' a la ruta de la página anterior
    
  }
}

