import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TodaysMatchesComponent } from './todays-matches/todays-matches.component';
import { PredictComponent } from './predict/predict.component';
import { MyPridictionsComponent } from './my-pridictions/my-pridictions.component';

/**
 * Provides routing configuration for the Play module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'todays-matches', pathMatch: 'full'},
    { path: 'todays-matches', component: TodaysMatchesComponent },
    { path: 'predict/:id', component: PredictComponent },
    { path: 'my-pridictions', component: MyPridictionsComponent },
  ])],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
