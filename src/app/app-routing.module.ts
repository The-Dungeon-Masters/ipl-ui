import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: '', redirectTo: 'play/todays-matches', pathMatch: 'full'},
  { path: 'play', loadChildren: 'app/play/play.module#PlayModule' },
  { path: '**', redirectTo: 'login' }
];


/**
 * Provides routing configuration for the App module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
