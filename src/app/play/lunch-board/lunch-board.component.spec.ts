import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchBoardComponent } from './lunch-board.component';

describe('LunchBoardComponent', () => {
  let component: LunchBoardComponent;
  let fixture: ComponentFixture<LunchBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
