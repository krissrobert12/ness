import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
})
export class SecondChildComponent implements OnInit {
  @Input('parentName') parentName: string;
  @Input('btnAction') pressed: () => void;

  constructor() {}

  ngOnInit(): void {}
}
