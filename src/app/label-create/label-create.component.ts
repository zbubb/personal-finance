import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { HttpServiceService } from '../http-service.service';

import { CreateLabelDto } from '../models/dtos/create-label-dto';

@Component({
  selector: 'app-label-create',
  templateUrl: './label-create.component.html',
  styleUrls: ['./label-create.component.css']
})
export class LabelCreateComponent implements OnInit {
  labelCreateForm: FormGroup;

  constructor(private apiService: HttpServiceService, private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.labelCreateForm = this.fb.group({
      labelText: ""
    });
  }

  onSubmit() {
    const formModel = this.labelCreateForm.value;
    const createDto: CreateLabelDto = {
      label_text: formModel.labelText
    };

    this.apiService.createLabel(createDto).subscribe(resp => {
      this.router.navigate(["/"]);
    });
  }

}
