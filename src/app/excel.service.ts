import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Encuesta } from './modelo/encuesta';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }
  exportToExcel(data: Encuesta[]): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = { Sheets: { ['ReporteEncuestas']: worksheet }, SheetNames: ['ReporteEncuestas'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    FileSaver.saveAs(blob, 'reporte.xlsx');
  }
}
