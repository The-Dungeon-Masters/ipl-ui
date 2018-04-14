import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RechargeComponent } from './recharge/recharge.component';
import { UpdateResultComponent } from './update-result/update-result.component';
/**
 * Provides routing configuration for the Core module
 */
@NgModule({
  imports: [RouterModule.forChild([
    { path: 'login', component: UserLoginComponent },
    { path: 'titukisweety', component: RegisterComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'karo-recharge', component: RechargeComponent },
    { path: 'result-update', component: UpdateResultComponent },
  ])],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
