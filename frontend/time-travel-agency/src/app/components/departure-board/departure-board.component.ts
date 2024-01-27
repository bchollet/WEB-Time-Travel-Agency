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
    this.journeyService.getJourneys().subscribe({
      next: (journeys: Journey[]) => {
        this.dataSource = journeys;
        this.loading = false;
      },
      error: (error: Error) => this.onFailure(error.message),
    });
  }

  edit(id: number) {
    this.router.navigate(['create-journey', id]);
  }

  delete(id: number) {
    this.loading = true;
    this.journeyService.deleteJourneyById(id).subscribe({
      next: () => {
        this.snackBarService.success('Data deleted successfully');
        this.dataSource = this.dataSource.filter(item => item.id !== id);
        this.loading = false;
      },
      error: (error: Error) => this.onFailure(error.message),
    });
  }

  private onFailure(errorMessage: string) {
    this.snackBarService.error(errorMessage);
    this.loading = false;
  }
}
