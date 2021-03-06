import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const classes = [
      {
        name: 'Transfiguration',
        students: [{ name: 'Harry' }, { name: 'Ginny' }],
        teachers: [{ name: 'Professor McGonagall' }],
      },
      {
        name: 'Potions',
        students: [{ name: 'Ron' }, { name: 'Hermione' }],
        teachers: [{ name: 'Professor Snape' }],
      },
      {
        name: 'Defense Against Dark Arts',
        students: [{ name: 'Draco' }, { name: 'Cho' }],
        teachers: [],
      },
    ];
    return { classes };
  }
}
