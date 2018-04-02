import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPridictionsComponent } from './my-pridictions.component';

describe('MyPridictionsComponent', () => {
  let component: MyPridictionsComponent;
  let fixture: ComponentFixture<MyPridictionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPridictionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPridictionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
