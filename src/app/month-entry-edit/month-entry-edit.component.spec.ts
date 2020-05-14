import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthEntryEditComponent } from './month-entry-edit.component';

describe('MonthEntryEditComponent', () => {
  let component: MonthEntryEditComponent;
  let fixture: ComponentFixture<MonthEntryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthEntryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
