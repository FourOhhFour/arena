import { Component, OnInit } from '@angular/core';
import { ISport } from '../ISport';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  private sub: any;
  sport: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.sport = params['id']; 
      //get api data for sport in here
   });
  }

  

}

