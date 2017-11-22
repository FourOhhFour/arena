import { Component, OnInit } from '@angular/core';
import { Result } from '../resultClass';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  inputs: ['result']
})
export class ResultComponent implements OnInit {

  result: Result;
  show: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
