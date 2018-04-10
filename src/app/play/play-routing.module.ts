import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodaysMatchesComponent } from './todays-matches/todays-matches.component';
import { PredictComponent } from './predict/predict.component';
import { MyPridictionsComponent } from './my-pridictions/my-pridictions.component';
import { MatchOverviewComponent } from './match-overview/match-overview.component';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import { EditPredictionComponent } from './edit-prediction/edit-prediction.component';
/**
 * Provides routing configuration for the Play module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'todays-matches', pathMatch: 'full'},
    { path: 'todays-matches', component: TodaysMatchesComponent },
    { path: 'predict/:id', component: PredictComponent },
    { path: 'my-predictions', component: MyPridictionsComponent },
    { path: 'match-overview/:id', component: MatchOverviewComponent },
    { path: 'all-matches', component: AllMatchesComponent  },
    { path: 'upcoming', component: UpcomingMatchesComponent  },
    { path: 'edit/:id', component: EditPredictionComponent  }
  ])],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
