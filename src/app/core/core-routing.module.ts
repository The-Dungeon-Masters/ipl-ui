import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RechargeComponent } from './recharge/recharge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
/**
 * Provides routing configuration for the Core module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: UserLoginComponent },
    { path: 'titukisweety', component: RegisterComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'karo-recharge', component: RechargeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user/:id', component: UserDashboardComponent }
  ])],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
