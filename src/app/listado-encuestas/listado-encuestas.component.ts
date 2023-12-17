import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../encuesta.service';
import { Encuesta } from '../modelo/encuesta';
import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ExcelService } from '../excel.service';

@Component({
  selector: 'app-listado-encuestas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-encuestas.component.html',
  styleUrl: './listado-encuestas.component.css',
})
export class ListadoEncuestasComponent implements OnInit {
  listadoEncuestas: Encuesta[] = [];
  constructor(
    private encuestaService: EncuestaService,
    private authService: AuthService,
    private router: Router,
    private excelExport: ExcelService
  ) {}
  ngOnInit(): void {
    this.encuestaService.ObtenerEncuestas().then((valor)=>{
      this.listadoEncuestas=valor;
    })
  }
  FinSesion() {
    this.authService.logout();
    this.authService.isLoggedIn().subscribe((valor) => {
      if (!valor) {
        this.router.navigate(['/']);
      }
    });
  }
  Export(){
    this.excelExport.exportToExcel(this.listadoEncuestas);
  }
}
