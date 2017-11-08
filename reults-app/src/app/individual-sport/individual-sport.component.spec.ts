import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualSportComponent } from './individual-sport.component';

describe('IndividualSportComponent', () => {
  let component: IndividualSportComponent;
  let fixture: ComponentFixture<IndividualSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
