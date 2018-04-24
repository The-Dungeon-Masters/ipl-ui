import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoreRoutingModule } from './core-routing.module';
import { RegisterComponent } from './register/register.component';
import { PlayService } from './services/play.service';
import { UsersService } from './services/users.service';
import { SecurityService } from './security.service';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RechargeComponent } from './recharge/recharge.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopGainersComponent } from './dashboard/top-gainers/top-gainers.component';
import { UserBoardComponent } from './dashboard/user-board/user-board.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CoreRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserLoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    RechargeComponent,
    DashboardComponent,
    TopGainersComponent,
    UserBoardComponent,
    UserDashboardComponent],
  providers: [
    PlayService,
    UsersService,
    SecurityService
  ]
})
export class CoreModule { }
