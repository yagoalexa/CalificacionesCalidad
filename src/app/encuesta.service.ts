import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor() { }

  enviarEncuesta(pregunta1:string, pregunta2:string, pregunta3:string, comentario:string):boolean{
    return true;
  }
}
