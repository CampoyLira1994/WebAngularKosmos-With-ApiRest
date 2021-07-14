import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Area } from './../../models/area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44301/api';


  getArea(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Area');
  }

  getAreaId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Area/' + id);
  }

  createArea(area: Area): Observable<any>{
    return this.http.post(this.rootURL + '/C1Area', area);
  }

  editArea(area: Area): Observable<any>{
    return this.http.put(this.rootURL + '/C1Area/' + area.idArea, area);
  }

  deleteArea(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Area/' + id);
  }


}
