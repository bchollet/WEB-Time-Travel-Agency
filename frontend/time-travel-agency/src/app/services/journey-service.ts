import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Journey } from '../models/journey';
import { Info } from '../models/info';
import { environment } from 'src/environments/environment';

@Injectable()
export class JourneyService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getInfo(): Observable<Info> {
    return this.http.get<Info>(`${this.apiUrl}/form-info`);
  }

  getJourneys(): Observable<Journey[]> {
    return this.http.get<Journey[]>(`${this.apiUrl}/journey`);
  }

  getJourneyById(id: number): Observable<Journey> {
    return this.http.get<Journey>(`${this.apiUrl}/journey/${id}`);
  }

  postJourney(journey: Journey): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<void>(`${this.apiUrl}/journey`, journey, { headers });
  }

  deleteJourneyById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/journey/${id}`);
  }
}
