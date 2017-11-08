import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSportSelectionComponent } from './user-sport-selection.component';

describe('UserSportSelectionComponent', () => {
  let component: UserSportSelectionComponent;
  let fixture: ComponentFixture<UserSportSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSportSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSportSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
