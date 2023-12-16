import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  login(email: string, password: string): void {
    // Aquí debes realizar la lógica de autenticación.
    // Puedes hacer una llamada a un servidor, verificar credenciales, etc.
    // En este ejemplo, simplemente asumimos que cualquier combinación de email y contraseña es válida.

    if (email && password) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }

  logout(): void {
    this.loggedIn.next(false);
  }
  isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
