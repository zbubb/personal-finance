import { Component, OnInit, Input } from '@angular/core';

import { HttpServiceService } from '../../../http-service.service';

import { Month } from '../../../models/month';
import { MonthOverview } from '../../../models/month-overview';

@Component({
  selector: 'app-month-card',
  templateUrl: './month-card.component.html',
  styleUrls: ['./month-card.component.css']
})
export class MonthCardComponent implements OnInit {

  @Input() month: Month;

  monthOverview: MonthOverview;
  isTotalPositive: boolean = false;

  constructor(private apiService: HttpServiceService) { }

  ngOnInit(): void {
    this.apiService.getMonthOverview(this.month.id, this.month.year).subscribe(overview => {
      this.monthOverview = overview;
      this.isTotalPositive = this.monthOverview.total > 0;
    });
  }

}
