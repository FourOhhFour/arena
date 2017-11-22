import { Component, OnInit } from '@angular/core';
import { Fixture } from '../fixtureClass'

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css'],
  inputs: ['sport']
})
export class FixturesComponent implements OnInit {

  sport: string;
  fixtures: Fixture[];
  show: boolean = false;


  constructor() { }

  ngOnInit() {
    this.fixtures = [
      new Fixture(new Date().toLocaleDateString(), 'Sheep', 2, 'Pigs', 1, 'The Field' ),
      new Fixture(new Date().toLocaleDateString(), 'Achill', 0, 'Arann', 15, 'Small Field'),
      new Fixture(new Date().toLocaleDateString(), 'Mexican Manchester Uniteds', 3, 'Man United', 2, 'Trafford')
    ];
  }

  changeShow(){
    this.show = !this.show;
  }

}
 