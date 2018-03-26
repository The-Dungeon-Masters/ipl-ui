import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';


/**
 * Provides routing configuration for the Core module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: UserLoginComponent },
  ])],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
