import { Component, OnInit } from '@angular/core';
import { Wizard } from '../wizard';
import { WizardClass } from '../wizard-class';

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
  classes: WizardClass[];

  constructor() {
    this.classes = data;
  }

  ngOnInit(): void {}

  whereIsRon = (classes: WizardClass[]) => {
    const result = classes.filter((cls) =>
      cls.students.find((wizard) => wizard.name == 'Ron')
    );

    return result;
  };

  filterTeachers = (classes: WizardClass[]) => {
    return classes.filter((cls) => cls.teachers.length);
  };

  format = (classes: WizardClass[]) => {
    return this.filterTeachers(classes);
  };
}
