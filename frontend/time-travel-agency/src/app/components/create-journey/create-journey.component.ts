import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Info } from 'src/app/models/info';
import { Journey } from 'src/app/models/journey';
import { JourneyService } from 'src/app/services/journey-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/services/snackbar-service';
import { LifeInsurance } from 'src/app/models/lifeInsurance';
import {
  HistoricalPeriod,
  dangerLevelToString,
} from 'src/app/models/historicalPeriod';

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.sass'],
})
export class CreateJourneyComponent implements OnInit {
  loading!: boolean;
  info!: Info;
  journeyForm!: FormGroup;
  journeyId: number | null = null;

  constructor(
    private journeyService: JourneyService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.journeyForm = this.formbuilder.group({
      client: [null, Validators.required],
      guide: [null, Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      historicalPeriod: [null, Validators.required],
      lifeInsurance: [null, Validators.required],
    });
    this.loading = true;
    this.journeyService.getInfo().subscribe({
      next: (info: Info) => {
        this.info = info;
        const journeyId = this.route.snapshot.params['id'];
        if (journeyId != undefined) {
          this.loadJourney(journeyId);
          this.journeyId = journeyId;
        } else {
          this.loading = false;
        }
      },
      error: (error: Error) => this.onFailure(error.message),
    });
  }

  onSubmit(): void {
    this.loading = true;
    const formValues = this.journeyForm.value;
    const client = this.info.clients.find(i => i.id === formValues.client);
    const guide = this.info.guides.find(i => i.id === formValues.guide);
    const insurance = this.info.lifeInsurances.find(
      i => i.id === formValues.lifeInsurance
    );
    const period = this.info.historicalPeriods.find(
      i => i.id === formValues.historicalPeriod
    );
    if (!client || !guide || !insurance || !period) {
      this.onFailure('Some form values are missing.');
      return;
    }
    const journey = {
      id: this.journeyId ? this.journeyId : -1,
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      historicalPeriod: period,
      client: client,
      lifeInsurance: insurance,
      guide: guide,
    };

    const obs =
      this.journeyId != null
        ? this.journeyService.updateJourney(journey)
        : this.journeyService.postJourney(journey);

    obs.subscribe({
      next: () => {
        this.snackBarService.success('Data saved successfully');
        this.loading = false;
      },
      error: (error: Error) => this.onFailure(error.message),
    });
  }

  insuranceDescription(insurance: LifeInsurance): string {
    return `${insurance.description} : ${insurance.price} CHF`;
  }

  periodDescription(period: HistoricalPeriod): string {
    return `${period.description} [DANGER LEVEL: ${dangerLevelToString(period.dangerLevel)}]`;
  }

  private loadJourney(id: number) {
    this.loading = true;
    this.journeyService.getJourneyById(id).subscribe({
      next: (journey: Journey) => {
        if (journey != null) {
          this.journeyForm.setValue({
            client: journey.client.id,
            guide: journey.guide.id,
            startDate: journey.startDate,
            endDate: journey.endDate,
            historicalPeriod: journey.historicalPeriod.id,
            lifeInsurance: journey.lifeInsurance.id,
          });
          this.loading = false;
        } else {
          this.onFailure('The journey has not been found on the server.');
        }
      },
      error: (error: Error) => this.onFailure(error.message),
    });
  }

  private onFailure(errorMessage: string) {
    this.snackBarService.error(errorMessage);
    this.loading = false;
  }
}
