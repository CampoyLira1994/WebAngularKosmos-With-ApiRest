import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { ReportesService } from './../1reportes.service/reportes.service';
import { EmpleadosService } from './../1empleados.service/empleados.service';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  // xlData: any[];
  // arraySaparater: any[];
  data: any[];

  constructor(public reportesService: ReportesService,
              public empleadosService: EmpleadosService) { }


  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const myworkbook: XLSX.WorkBook = { Sheets: { data: myworksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_exported' + EXCEL_EXTENSION);
  }

  // tslint:disable-next-line: typedef
  onFileChangeReporte(evt: any) {
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1, defval: null }));
      console.log('data: ', this.data);
      // aplico slice para omitir los encabezados.
      const x = this.data.slice(1);
      console.log('x: ', x);
      x.forEach(reporte => {
        console.log(reporte, 'reporte');
        this.reportesService.createReporte({
          idReporte: reporte[0],
          idEmpleado: reporte[1],
          idServicio: reporte[2],
          nombreComensal: reporte[3],
          fecha: reporte[4],
          fechaDate: reporte[5],
          fechaStrnig: reporte[6]
         }).subscribe((data) => {
        });
      });
    };

    reader.readAsBinaryString(target.files[0]);

  }


    // tslint:disable-next-line: typedef
    // onFileChangeEmpleado(evt: any) {
    //   const target: DataTransfer = (evt.target) as DataTransfer;
    //   if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
    //   const reader: FileReader = new FileReader();
    //   reader.onload = (e: any) => {
    //     const bstr: string = e.target.result;
    //     const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
    //     const wsname: string = wb.SheetNames[0];
    //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    //     this.data = (XLSX.utils.sheet_to_json(ws, { header: 1, defval: null }));
    //     console.log('data: ', this.data);
    //     // aplico slice para omitir los encabezados.
    //     const x = this.data.slice(1);
    //     console.log('x: ', x);
    //     x.forEach(empelado => {
    //       console.log(empelado, 'empleado');
    //       if (empelado[1] != null && empelado[2] != null && empelado[3] != null && empelado[4] != null
    //         && empelado[7] != null && empelado[8] != null){
    //       this.empleadosService.createEmpleado({
    //         idEmpleado: empelado[0],
    //         idEstatus: empelado[1],
    //         idTipoUsuario: empelado[2],
    //         idEmpresa: empelado[3],
    //         idArea: empelado[4],
    //         credencial: empelado[5],
    //         contraseña: empelado[6],
    //         nombres: empelado[7],
    //         apellidos: empelado[8],
    //         RFC: empelado[9],
    //         CDC: empelado[10],
    //         telefono1: empelado[11],
    //         telefono2: empelado[12],
    //         radio: empelado[13],
    //         celular: empelado[14],
    //         email: empelado[15],
    //         calleYNumero: empelado[16],
    //         Colonia: empelado[17],
    //         delegacionMunicipio: empelado[18],
    //         cp: empelado[19]
    //        }).subscribe((data) => {
    //       });
    //     }
    //     });
    //   };

    //   reader.readAsBinaryString(target.files[0]);

    // }


}
