import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-fin-encuesta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fin-encuesta.component.html',
  styleUrl: './fin-encuesta.component.css',
})
export class FinEncuestaComponent {
  constructor(private authService: AuthService, private router: Router) {}
  FinSesion() {
    this.authService.logout();
    this.authService.isLoggedIn().subscribe((valor)=>{
      if (!valor) {
        this.router.navigate(['/']);
      }
    })
  }
}
