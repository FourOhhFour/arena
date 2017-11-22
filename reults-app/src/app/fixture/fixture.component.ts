import { Component, OnInit } from '@angular/core';
import { Fixture } from '../fixtureClass'

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css'],
  inputs: ['fixture']
})
export class FixtureComponent implements OnInit {

  fixture: Fixture;

  constructor() { }

  ngOnInit() {
  }

}
