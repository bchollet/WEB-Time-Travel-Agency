import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateJourneyComponent } from './components/create-journey/create-journey.component';
import { DepartureBoardComponent } from './components/departure-board/departure-board.component';

import { JourneyService } from './services/journey-service';

// todo: move all the material stuff in separate module
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateJourneyComponent,
    DepartureBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
  ],
  providers: [JourneyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
