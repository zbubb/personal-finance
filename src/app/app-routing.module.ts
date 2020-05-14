import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LabelCreateComponent } from './label-create/label-create.component';
import { MonthDetailComponent } from './month-detail/month-detail.component';
import { MonthEntryEditComponent } from './month-entry-edit/month-entry-edit.component';
import { MonthEntryCreateComponent } from './month-entry-create/month-entry-create.component';

const routes: Routes = [
  {
    path: "month/:monthId/year/:year",
    component: MonthDetailComponent
  },
  {
    path: "month/entry/create",
    component: MonthEntryCreateComponent
  },
  {
    path: "month/entry/:monthEntryId/edit",
    component: MonthEntryEditComponent
  },
  {
    path: "label/create",
    component: LabelCreateComponent
  },
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
