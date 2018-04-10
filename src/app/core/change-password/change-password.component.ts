import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';
import { UsersService } from '../services/users.service';
import { AbstractRedirect } from '../abstract-redirect';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { Errors } from '../errors';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends AbstractRedirect implements OnInit {

  public errors = new Errors();

  public password = {};

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService,
    public userService: UsersService
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  public changePassword(): void {
    this.userService.changePassword(this.password)
      .subscribe(res => {
        debugger;
      });
  }

}
