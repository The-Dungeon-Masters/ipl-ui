import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchUserComponent } from './lunch-user.component';

describe('LunchUserComponent', () => {
  let component: LunchUserComponent;
  let fixture: ComponentFixture<LunchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
