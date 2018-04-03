import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodaysMatchesComponent } from './todays-matches/todays-matches.component';
import { PredictComponent } from './predict/predict.component';
import { MyPridictionsComponent } from './my-pridictions/my-pridictions.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
/**
 * Provides routing configuration for the Play module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'todays-matches', pathMatch: 'full'},
    { path: 'todays-matches', component: TodaysMatchesComponent },
    { path: 'predict/:id', component: PredictComponent },
    { path: 'my-pridictions', component: MyPridictionsComponent },
    { path: 'match-overview/:id', component: MatchOverviewComponent }
  ])],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
