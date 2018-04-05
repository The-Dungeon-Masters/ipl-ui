import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPredictionComponent } from './edit-prediction.component';

describe('EditPredictionComponent', () => {
  let component: EditPredictionComponent;
  let fixture: ComponentFixture<EditPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
