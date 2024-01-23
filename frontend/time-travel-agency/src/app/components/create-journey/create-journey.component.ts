import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Info } from 'src/app/models/info';
import { Journey } from 'src/app/models/journey';
import { JourneyService } from 'src/app/services/journey-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/services/snackbar-service';

@Component({
  selector: 'app-create-journey',
  templateUrl: './create-journey.component.html',
  styleUrls: ['./create-journey.component.sass'],
})
export class CreateJourneyComponent implements OnInit {
  loading!: boolean;
  info!: Info;
  journeyForm!: FormGroup;

  constructor(
    private journeyService: JourneyService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.journeyForm = this.formbuilder.group({
      client: [0, Validators.required],
      guide: [0, Validators.required],
      startDate: [new Date(), Validators.required],
      endDate: [new Date(), Validators.required],
      historicalPeriod: [0, Validators.required],
      lifeInsurance: [0, Validators.required],
    });

    this.journeyService.infoSubject.subscribe({
      next: (info: Info) => {
        this.info = info;
        const journeyId = this.route.snapshot.params['id'];
        if (journeyId != undefined) {
          this.loadJourney(journeyId);
        } else {
          this.loading = false;
        }
      },
      error: (error: Error) => {
        this.loading = false;
        this.snackBarService.error(error.message);
      },
    });
    this.loading = true;
    this.journeyService.getInfo();
  }

  onSubmit(): void {
    this.loading = true;
    // const formValues = this.journeyForm.value;
    this.journeyService.postJourney().subscribe({
      next: () => {
        this.snackBarService.success('Data saved successfully');
        this.loading = false;
      },
      error: (error: Error) => {
        this.snackBarService.error(error.message);
        this.loading = false;
      },
    });
  }

  private loadJourney(journeyId: number) {
    this.journeyService.getJourney(journeyId).subscribe((journey: Journey) => {
      if (journey != null) {
        this.journeyForm.setValue({
          client: journey.client.id,
          guide: journey.guide.id,
          startDate: journey.startDate,
          endDate: journey.endDate,
          historicalPeriod: journey.historicalPeriod.id,
          lifeInsurance: journey.lifeInsurance.id,
        });
      } else {
        this.snackBarService.error(
          'The journey has not been found on the server.'
        );
      }
      this.loading = false;
    });
  }
}
