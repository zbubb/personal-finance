import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { HttpServiceService } from '../http-service.service';

import { MonthEntry } from '../models/resources/month-entry';

@Component({
  selector: 'app-month-detail',
  templateUrl: './month-detail.component.html',
  styleUrls: ['./month-detail.component.css']
})
export class MonthDetailComponent implements OnInit {
  monthId: number;
  year: number;
  entries: MonthEntry[] = [];
  labelMap: Map<number, string> = new Map<number, string>();
  income: number = 0;
  expenses: number = 0;
  total: number = 0;
 
  months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };

  constructor(private route: ActivatedRoute, private apiService: HttpServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.monthId = +params.get("monthId");
      this.year = +params.get("year");

      this.apiService.getLabels().subscribe(labels => {
        labels.forEach(label => {
          this.labelMap.set(label.pk, label.fields.label_text);
        });
      });
      this.apiService.getMonthEntries(this.monthId, this.year).subscribe(entries => {
        this.entries = entries;
        this.entries.forEach(entry => {
          if (entry.fields.isPositive) {
            this.income += entry.fields.amount;
          } else {
            this.expenses += entry.fields.amount;
          }
        });
        this.total = this.income - this.expenses;
      });
    });
  }

}
