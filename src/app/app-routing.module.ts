import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MonthDetailComponent } from './month-detail/month-detail.component';

const routes: Routes = [
  {
    path: "month/:monthId/year/:year",
    component: MonthDetailComponent
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
