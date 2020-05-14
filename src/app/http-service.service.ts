import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { Label } from './models/label';
import { MonthEntry } from './models/month-entry';
import { MonthOverview } from './models/month-overview';

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

  getLabels(): Observable<Label[]> {
    const queryString = `${this.apiUrl}/labels`;
    return this.http.get<Label[]>(queryString);
  }
}
