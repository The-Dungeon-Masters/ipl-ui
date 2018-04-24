import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../abstract-redirect';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent extends AbstractRedirect implements OnInit {

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public userService: UsersService
  ) {
    super(securityService, router);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
