import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { FinEncuestaComponent } from './fin-encuesta/fin-encuesta.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'encuesta',
    component: EncuestaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'finalizacion-encuesta',
    component: FinEncuestaComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
