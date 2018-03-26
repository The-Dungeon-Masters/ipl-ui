import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


/**
 * Provides routing configuration for the Play module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'play', pathMatch: 'full'},

  ])],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
