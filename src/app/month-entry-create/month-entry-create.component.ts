import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { HttpServiceService } from '../http-service.service';

import { Label } from '../models/label';

@Component({
  selector: 'app-month-entry-create',
  templateUrl: './month-entry-create.component.html',
  styleUrls: ['./month-entry-create.component.css']
})
export class MonthEntryCreateComponent implements OnInit {
  labels: Label[] = [];
  monthEntryForm: FormGroup;

  constructor(private apiService: HttpServiceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.apiService.getLabels().subscribe(labels => {
      this.labels = labels;
    });
  }

  createForm() {
    this.monthEntryForm = this.fb.group({
      date: "",
      amount: 0,
      isPositive: false,
      label: 0
    });
  }

  onSubmit() {
    console.log("Submit");
  }

}
