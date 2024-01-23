import { Component } from '@angular/core';
import { JourneyService } from 'src/app/services/journey-service';

@Component({
  selector: 'app-departure-board',
  templateUrl: './departure-board.component.html',
  styleUrls: ['./departure-board.component.sass'],
})
export class DepartureBoardComponent {
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
  dataSource = [];
  constructor(private journeyService: JourneyService) {}
}
