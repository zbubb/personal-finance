import { Component, OnInit, Input } from '@angular/core';

import { Month } from '../../../models/month';

@Component({
  selector: 'app-month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.css']
})
export class MonthCardComponent implements OnInit {
  @Input() month: Month;

  constructor() { }

  ngOnInit(): void {
  }

}
