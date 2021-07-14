import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Reportes } from './../../models/reportes.modl';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44301/api';


  getReportes(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Reportes');
  }

  getReporteId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Reportes/' + id);
  }

  createReporte(reporte: Reportes): Observable<any>{
    return this.http.post(this.rootURL + '/C1Reportes', reporte);
  }

  editReporte(reporte: Reportes): Observable<any>{
    return this.http.put(this.rootURL + '/C1Reportes/' + reporte.idReporte, reporte);
  }

  deleteReporte(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Reportes/' + id);
  }


}
