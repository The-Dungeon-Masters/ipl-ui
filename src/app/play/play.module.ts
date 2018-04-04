import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodaysMatchesComponent } from './todays-matches/todays-matches.component';
import { PlayRoutingModule } from './play-routing.module';
import { PredictComponent } from './predict/predict.component';
import { MyPridictionsComponent } from './my-pridictions/my-pridictions.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';
@NgModule({
  imports: [
    CommonModule,
    PlayRoutingModule
  ],
  declarations: [TodaysMatchesComponent, PredictComponent, MyPridictionsComponent, MatchOverviewComponent, AllMatchesComponent]
})
export class PlayModule { }
