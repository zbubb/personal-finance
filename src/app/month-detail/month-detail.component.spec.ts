import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDetailComponent } from './month-detail.component';

describe('MonthDetailComponent', () => {
  let component: MonthDetailComponent;
  let fixture: ComponentFixture<MonthDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
