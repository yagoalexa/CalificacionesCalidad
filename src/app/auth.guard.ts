import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) {
    
  }

  canActivate() {
    this.authService.isLoggedIn().subscribe((valor)=>{
      if (valor) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    });
  }
}
