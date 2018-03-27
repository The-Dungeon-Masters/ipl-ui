import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { CoreRoutingModule } from './core-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [HeaderComponent, FooterComponent, UserLoginComponent, RegisterComponent]
})
export class CoreModule { }