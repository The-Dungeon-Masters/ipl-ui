import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../abstract-redirect';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent extends AbstractRedirect implements OnInit {

  public users = [];
  public recharge = {};
  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public userService: UsersService
  ) { super(securityService, router); }

  ngOnInit() {
    super.ngOnInit();
    this.getAllUsers();
  }

  public rechargePts(): void {
    this.userService.recharge(this.recharge)
    .subscribe(res => {
      console.log(res);
      alert('done');
    });
  }

  public getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(res => {
        this.users = res;
      });
  }
}
