import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResultComponent } from './update-result.component';

describe('UpdateResultComponent', () => {
  let component: UpdateResultComponent;
  let fixture: ComponentFixture<UpdateResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
