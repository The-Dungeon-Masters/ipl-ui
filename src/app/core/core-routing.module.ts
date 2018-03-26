import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';


/**
 * Provides routing configuration for the Core module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: UserLoginComponent },
    { path: 'titukisweety', component: RegisterComponent },
  ])],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
