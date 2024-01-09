// crud-user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root',
})
export class CrudUserService {
  private apiUrl = 'http://localhost:3000/users/register';

  constructor(private http: HttpClient) {}


  addClient(user: Iuser): Observable<Iuser> {
    return this.http.post<Iuser>(this.apiUrl,user);
  }

  
}
