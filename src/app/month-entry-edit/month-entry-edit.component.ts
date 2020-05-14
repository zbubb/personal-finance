import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { HttpServiceService } from '../http-service.service';

import { Label } from '../models/label';
import { MonthEntry } from '../models/month-entry';

@Component({
  selector: 'app-month-entry-edit',
  templateUrl: './month-entry-edit.component.html',
  styleUrls: ['./month-entry-edit.component.css']
})
export class MonthEntryEditComponent implements OnInit {
  monthEntry: MonthEntry;
  labels: Label[] = [];
  monthEntryForm: FormGroup;

  constructor(private apiService: HttpServiceService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const entryId = +params.get("monthEntryId");
      this.apiService.getMonthEntry(entryId).subscribe(entry => {
        this.monthEntry = entry;
        this.populateFormInfo();
      });
      this.apiService.getLabels().subscribe(labels => {
        this.labels = labels;
      });
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

  populateFormInfo() {
    this.monthEntryForm.get("date").setValue(this.monthEntry.fields.entryDate);
    this.monthEntryForm.get("amount").setValue(this.monthEntry.fields.amount);
    this.monthEntryForm.get("isPositive").setValue(this.monthEntry.fields.isPositive);
    this.monthEntryForm.get("label").setValue(this.monthEntry.fields.label);
  }

  onSubmit() {
    console.log("Submit");
  }

}
