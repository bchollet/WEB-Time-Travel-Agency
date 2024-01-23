import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Journey } from 'src/app/models/journey';
import { JourneyService } from 'src/app/services/journey-service';
import { SnackBarService } from 'src/app/services/snackbar-service';

@Component({
  selector: 'app-departure-board',
  templateUrl: './departure-board.component.html',
  styleUrls: ['./departure-board.component.sass'],
})
export class DepartureBoardComponent implements OnInit {
  displayedColumns: string[] = [
    'client',
    'guide',
    'startDate',
    'endDate',
    'period',
    'insurance',
    'edit',
    'delete',
  ];
  dataSource: Journey[] = [];

  loading = false;

  constructor(
    private journeyService: JourneyService,
    private router: Router,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.journeyService.journeysSubject.subscribe({
      next: (journeys: Journey[]) => {
        this.dataSource = journeys;
        this.loading = false;
      },
      error: (error: Error) => this.snackBarService.error(error.message),
    });
    this.journeyService.getJourneys();
  }

  edit(journeyId: number) {
    this.router.navigate(['create-journey', journeyId]);
  }

  delete(journeyId: number) {
    this.journeyService.deleteJourney(journeyId).subscribe({
      next: () => {
        this.snackBarService.success('Data deleted successfully');
        this.dataSource = this.dataSource.filter(item => item.id !== journeyId);
        this.loading = false;
      },
      error: (error: Error) => {
        this.snackBarService.error(error.message);
        this.loading = false;
      },
    });
  }
}
