import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss'],
})
export class FirstChildComponent implements OnInit {
  @Input('parentName') parentName: string;

  constructor() {}

  ngOnInit(): void {}
}
