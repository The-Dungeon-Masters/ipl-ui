import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { UsersService } from '../../core/services/users.service';
import { Router } from '@angular/router';
import { SecurityService } from '../../core/security.service';

@Component({
  selector: 'app-recharge-history',
  templateUrl: './recharge-history.component.html',
  styleUrls: ['./recharge-history.component.css']
})
export class RechargeHistoryComponent extends AbstractRedirect implements OnInit {

  public recharges;

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public userService: UsersService
  ) {
    super(securityService, router );
   }

  ngOnInit() {
    super.ngOnInit();
    this.getRecharges();
  }

  public getRecharges(): void {
    this.userService.getRecharges()
      .subscribe(res => {
        this.recharges = res;
      });
  }
}
