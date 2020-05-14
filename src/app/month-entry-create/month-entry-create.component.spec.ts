import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthEntryCreateComponent } from './month-entry-create.component';

describe('MonthEntryCreateComponent', () => {
  let component: MonthEntryCreateComponent;
  let fixture: ComponentFixture<MonthEntryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthEntryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
