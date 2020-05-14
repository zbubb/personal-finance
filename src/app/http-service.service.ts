import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { Label } from './models/resources/label';
import { MonthEntry } from './models/resources/month-entry';
import { MonthOverview } from './models/resources/month-overview';
import { CreateLabelDto } from './models/dtos/create-label-dto';
import { CreateMonthEntryDto } from './models/dtos/create-month-entry-dto';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.APIUrl + "api";
  }

  getMonthOverview(monthId: number, year: number): Observable<MonthOverview> {
    const queryString = `${this.apiUrl}/month/${monthId}/year/${year}/overview`;
    return this.http.get<MonthOverview>(queryString);
  }

  getMonthEntry(entryId: number): Observable<MonthEntry> {
    const queryString = `${this.apiUrl}/month/entry/${entryId}`;
    return this.http.get<MonthEntry>(queryString);
  }

  getMonthEntries(monthId: number, year: number): Observable<MonthEntry[]> {
    const queryString = `${this.apiUrl}/month/${monthId}/year/${year}/entries`;
    return this.http.get<MonthEntry[]>(queryString);
  }

  createMonthEntry(createDto: CreateMonthEntryDto): Observable<MonthEntry> {
    const queryString = `${this.apiUrl}/month/entry/create`;
    return this.http.post<MonthEntry>(queryString, createDto);
  }

  editMonthEntry(entryId: number, editDto: CreateMonthEntryDto): Observable<MonthEntry> {
    const queryString = `${this.apiUrl}/month/entry/${entryId}/edit`;
    return this.http.put<MonthEntry>(queryString, editDto);
  }

  getLabels(): Observable<Label[]> {
    const queryString = `${this.apiUrl}/labels`;
    return this.http.get<Label[]>(queryString);
  }

  createLabel(createDto: CreateLabelDto): Observable<Label> {
    const queryString = `${this.apiUrl}/label`;
    return this.http.post<Label>(queryString, createDto);
  }
}
