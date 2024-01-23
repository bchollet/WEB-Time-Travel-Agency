import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/models/info';
import { JourneyService } from 'src/app/services/journey-service';

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.sass'],
})
export class CreateJourneyComponent implements OnInit {
  loadingData!: boolean;
  info!: Info;

  constructor(private journeyService: JourneyService) {}

  ngOnInit() {
    this.journeyService.infoSubject.subscribe({
      next: (info: Info) => {
        this.info = info;
        this.loadingData = false;
      },
      error: () => {
        // TODO: error management
        this.loadingData = false;
      },
    });

    this.loadingData = true;
    this.journeyService.getInfo();
  }
}
