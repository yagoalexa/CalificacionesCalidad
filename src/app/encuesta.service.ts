import { Injectable } from '@angular/core';
import { Encuesta } from './modelo/encuesta';
import { db } from '../app/db/db'

@Injectable({
  providedIn: 'root',
})
export class EncuestaService {
  constructor() {}

  async EnviarEncuesta(
    pregunta1: number,
    pregunta2: number,
    pregunta3: number,
    comentario: string
  ): Promise<boolean> {
    await db.encuesta.add({
      pas:'Mosquera',
      pregunta1: pregunta1,
      pregunta2: pregunta2,
      pregunta3: pregunta3,
      comentarios: comentario,
      promedio: (pregunta1+pregunta2+pregunta3)/3,
      fecha: new Date()
    });
    return true;
  }
  async ObtenerEncuestas(): Promise<Encuesta[]> {
    return await db.encuesta.toArray();
  }
}
