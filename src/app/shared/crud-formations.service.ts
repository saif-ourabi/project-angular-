import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormtaion } from '../formation/i-formtaion';

@Injectable({
  providedIn: 'root'
})
export class CrudFormationsService {
  private url = 'http://localhost:3000/formations';

  constructor(private http: HttpClient) {}

  getFormations(): Observable<IFormtaion[]> {
    return this.http.get<IFormtaion[]>(this.url);
  }
}
