import { Component, OnInit, Input } from '@angular/core';
import { MonthOverview } from '../../../models/month-overview';

@Component({
  selector: 'app-month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.css']
})
export class MonthCardComponent implements OnInit {
  @Input() month: MonthOverview;

  constructor() { }

  ngOnInit(): void {
  }

}
