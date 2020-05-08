import { Component, OnInit, Input } from '@angular/core';

import { Label } from '../../../models/label';

@Component({
  selector: 'app-month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.css']
})
export class MonthCardComponent implements OnInit {
  @Input() month: Label;

  constructor() { }

  ngOnInit(): void {
  }

}
