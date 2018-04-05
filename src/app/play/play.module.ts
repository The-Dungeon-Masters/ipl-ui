import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodaysMatchesComponent } from './todays-matches/todays-matches.component';
import { PlayRoutingModule } from './play-routing.module';
import { PredictComponent } from './predict/predict.component';
import { MyPridictionsComponent } from './my-pridictions/my-pridictions.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { EditPredictionComponent } from './edit-prediction/edit-prediction.component';
@NgModule({
  imports: [
    CommonModule,
    PlayRoutingModule
  ],
  declarations: [
    TodaysMatchesComponent,
    PredictComponent,
    MyPridictionsComponent,
    MatchOverviewComponent,
    AllMatchesComponent,
    UpcomingMatchesComponent,
    EditPredictionComponent]
})
export class PlayModule { }
