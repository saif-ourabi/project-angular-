import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFormation } from '../formation/i-formtaion';

@Injectable({
  providedIn: 'root'
})
export class CrudFormationsService {
  private url = 'http://localhost:3000/formations';

  constructor(private http: HttpClient) {}

  getFormations(): Observable<IFormation[]> {
    return this.http.get<IFormation[]>(this.url);
  }
  
  getFormationById(id: string): Observable<IFormation> {
    const formationUrl = `${this.url}/${id}`;
    return this.http.get<IFormation>(formationUrl);
  }
  
}
