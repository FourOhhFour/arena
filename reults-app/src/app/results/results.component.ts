import { Component, OnInit } from '@angular/core';
import { Result } from '../resultClass';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  inputs: ['sport', 'results']
})
export class ResultsComponent implements OnInit {


  sport: string;
  results: Result[];
  show: boolean = false;


  constructor() { }

  ngOnInit() {
    this.results = [
      new Result(new Date().toLocaleDateString(), 'Red Team', 'Blue Team', 'Big Stadium'),
      new Result(new Date().toLocaleDateString(), 'Ireland', 'Achill', 'Mainland'),
      new Result(new Date().toLocaleDateString(), 'Roscommon', 'Sligo', 'Hyde Park'),
      new Result(new Date().toLocaleDateString(), 'Mexican Knights', 'Mexican Cubs', 'Longford')
    ]; 
  }

  changeShow(){
    this.show = !this.show;
  }

}
