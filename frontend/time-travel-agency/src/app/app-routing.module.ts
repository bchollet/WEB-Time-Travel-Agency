import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartureBoardComponent } from './components/departure-board/departure-board.component';
import { CreateJourneyComponent } from './components/create-journey/create-journey.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'departure-board', component: DepartureBoardComponent },
  { path: 'create-journey/:id', component: CreateJourneyComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
