import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TypeUser } from './../../models/typeUser.model';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {

  constructor(private http: HttpClient) { }

  listTypeUser: TypeUser[];

  readonly rootURL = 'https://localhost:44301/api';


     // tslint:disable-next-line: typedef
     getTypeUser(): Observable<any> {
      return this.http.get(this.rootURL + '/TypeUsers');
    }

    getTypeUserId(id): Observable<any> {
      return this.http.get(this.rootURL + '/TypeUsers/' + id);
    }

    createTypeUser(typeUser: any): Observable<any> {
      return this.http.post(this.rootURL + '/TypeUsers', typeUser);
    }

    editTypeUser(typeUser: TypeUser): Observable<any> {
      console.log(typeUser, 'editTypeUser de sevice');
      return this.http.put(
        this.rootURL + '/TypeUsers/' + typeUser.idTypeUser, typeUser
      );

    }

    deleteTypeUser(id): Observable<any> {
      return this.http.delete(this.rootURL + '/TypeUsers/' + id);
    }

}
