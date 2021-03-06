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

<<<<<<< HEAD
  getClasses(): Observable<WizardClass[]> {
=======
  getHeroes(): Observable<WizardClass[]> {
>>>>>>> 68c8dadd0d6a3fe367a30d8a27780792b1fd4e4d
    return this.http.get<WizardClass[]>(this.classesUrl);
  }
}
