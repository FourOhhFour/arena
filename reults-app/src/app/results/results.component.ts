import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


  sports: string[] = [];
  show: boolean = true;


  constructor() { }

  ngOnInit() {
    this.sports = ["soccer", "football", "rugby", "tennis", "water polo"]
  }

  changeShow(){
    this.show = !this.show;
  }

}
