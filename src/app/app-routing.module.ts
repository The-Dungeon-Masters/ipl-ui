import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
  { path: 'play', loadChildren: 'app/play/play.module#PlayModule' }
];


/**
 * Provides routing configuration for the App module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
