import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      if (valor && email == 'adriana.rivera@simitdelosandes.com.co')
        this.router.navigate(['/encuestas']);
      else if (valor) {
        this.router.navigate(['/encuesta']);
      }
      else this.mensaje = 'Error al ingresar';
    });
  }
}
