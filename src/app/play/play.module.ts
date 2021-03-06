import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodaysMatchesComponent } from './todays-matches/todays-matches.component';
import { PlayRoutingModule } from './play-routing.module';
import { PredictComponent } from './predict/predict.component';
import { MyPridictionsComponent } from './my-pridictions/my-pridictions.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { FormsModule } from '@angular/forms';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { EditPredictionComponent } from './edit-prediction/edit-prediction.component';
import { RechargeHistoryComponent } from './recharge-history/recharge-history.component';
import { LunchBoardComponent } from './lunch-board/lunch-board.component';
import { LunchUserComponent } from './lunch-user/lunch-user.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlayRoutingModule
  ],
  declarations: [
    TodaysMatchesComponent,
    PredictComponent,
    MyPridictionsComponent,
    MatchOverviewComponent,
    AllMatchesComponent,
    UpcomingMatchesComponent,
    EditPredictionComponent,
    RechargeHistoryComponent,
    LunchBoardComponent,
    LunchUserComponent],
})
export class PlayModule { }
