import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WizardClass } from './wizard-class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  private classesUrl = 'api/classes';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<WizardClass[]> {
    return this.http.get<WizardClass[]>(this.classesUrl);
  }
}
