import { Component, OnInit } from '@angular/core';

const data = [
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

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.scss'],
})
export class ClassTableComponent implements OnInit {
  classes: {
    name: string;
    students: { name: string }[];
    teachers: { name: string }[];
  }[];

  constructor() {
    this.classes = data;
  }

  ngOnInit(): void {}
}
