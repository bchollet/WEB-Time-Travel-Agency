import { HttpClient } from '@angular/common/http';
import { Info, fakeInfo } from '../models/info';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class JourneyService {
  infoSubject: Subject<Info> = new Subject<Info>();

  constructor(private http: HttpClient) {}

  getInfo(): void {
    this.emitInfo(fakeInfo());
  }

  private emitInfo(info: Info) {
    this.infoSubject.next(info);
  }
}
