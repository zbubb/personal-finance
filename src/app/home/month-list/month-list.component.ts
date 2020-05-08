import { Component, OnInit } from '@angular/core';

import { HttpServiceService } from '../../http-service.service';

import { Label } from '../../models/label';

@Component({
  selector: 'app-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.css']
})
export class MonthListComponent implements OnInit {
  months: Label[] = [];

  constructor(private apiService: HttpServiceService) { }

  ngOnInit(): void {
    this.apiService.getLabels().subscribe(labels => {
      console.log(labels);
      this.months = labels;
    });
  }

}
