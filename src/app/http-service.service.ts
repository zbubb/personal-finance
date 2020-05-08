import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { Label } from './models/label';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.APIUrl + "api";
  }

  getLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(this.baseUrl);
  }
}
