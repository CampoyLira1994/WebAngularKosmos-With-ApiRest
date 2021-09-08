import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Reportes } from './../../models/reportes.model';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';


  getReportes(): Observable<any> {
    return this.http.get(this.rootURL + '/C2Reportes');
  }

  getReporteId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C2Reportes/' + id);
  }

  createReporte(reporte: Reportes): Observable<any>{
    return this.http.post(this.rootURL + '/C2Reportes', reporte);
  }

  editReporte(reporte: Reportes): Observable<any>{
    return this.http.put(this.rootURL + '/C2Reportes/' + reporte.idReporte, reporte);
  }

  deleteReporte(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C2Reportes/' + id);
  }


}
