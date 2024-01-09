import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Iuser } from './iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/users/login';
  private options = { headers: new HttpHeaders({ 'content-type': 'application/json' }) };

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<Iuser>(
      this.apiUrl,
      { email, password },
      this.options
    ).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }
}
