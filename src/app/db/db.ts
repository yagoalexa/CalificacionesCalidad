import Dexie, { Table } from 'dexie';
import { Encuesta } from '../modelo/encuesta';

export class AppDB extends Dexie {
  encuesta!: Table<Encuesta, number>;
  constructor() {
    super('encuestasDB');
    this.version(3).stores({
      encuesta: '++id,pregunta1,pregunta2,pregunta3,comentarios,pas,promedio,fecha',
    });
  }
}

export const db = new AppDB();