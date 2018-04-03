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
import { SecurityService } from './security.service';
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
  declarations: [HeaderComponent, FooterComponent, UserLoginComponent, RegisterComponent],
  providers: [
    PlayService,
    SecurityService
  ]
})
export class CoreModule { }
