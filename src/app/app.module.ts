import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Modules
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MonthListComponent } from './home/month-list/month-list.component';
import { MonthCardComponent } from './home/month-list/month-card/month-card.component';
import { MonthDetailComponent } from './month-detail/month-detail.component';
import { LabelCreateComponent } from './label-create/label-create.component';
import { MonthEntryEditComponent } from './month-entry-edit/month-entry-edit.component';
import { MonthEntryCreateComponent } from './month-entry-create/month-entry-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MonthListComponent,
    MonthCardComponent,
    MonthDetailComponent,
    LabelCreateComponent,
    MonthEntryEditComponent,
    MonthEntryCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
