import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  name: string = 'Parent';

  constructor() {}

  ngOnInit(): void {}

  taskForChild2 = () => {
    console.log('Pressed');
  };
}
