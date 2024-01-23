import { HttpClient } from '@angular/common/http';
import { Info, fakeInfo } from '../models/info';
import { Observable, Subject, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Journey, fakeJourney } from '../models/journey';

@Injectable()
export class JourneyService {
  private info: Info | null = null;
  infoSubject: Subject<Info> = new Subject<Info>();

  private journeys: Journey[] = [];
  journeysSubject: Subject<Journey[]> = new Subject<Journey[]>();

  constructor(private http: HttpClient) {}

  getInfo(): void {
    this.emitInfo(fakeInfo());
  }

  getJourneys(): void {
    this.emitJourneys([fakeJourney()]);
  }

  getJourney(journeyId: number): Observable<Journey> {
    return of<Journey>(fakeJourney());
  }

  // TODO: decide with Bastian what structure to send here
  // also what we receive
  postJourney(): Observable<void> {
    return throwError(() => new Error('Not implemented yet'));
  }

  // TODO: decide with Bastian what structure to send here
  // also what we receive
  deleteJourney(journeyId: number): Observable<void> {
    return throwError(() => new Error('Not implemented yet'));
  }

  private emitInfo(info: Info): void {
    this.infoSubject.next(info);
  }

  private emitJourneys(journeys: Journey[]): void {
    this.journeysSubject.next(journeys.slice());
  }
}
