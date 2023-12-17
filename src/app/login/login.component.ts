import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  mostrarPassword = false;
  mensaje: string = '';
  toggleMostrarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.initLoginForm();
  }
  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  Login(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
    this.authService.isLoggedIn().subscribe((valor) => {
      if (
        valor &&
        email == 'admin@simitdelosandes.com.co' &&
        password == 'pruebaAdmin'
      )
        this.router.navigate(['/encuestas']);
      if (
        valor &&
        email == 'test@simitdelosandes.com.co' &&
        password == 'pruebaTest'
      )
        this.router.navigate(['/encuesta']);
      else this.mensaje = 'Coroeo y contraseña incorrectos.';
    });
  }
}
