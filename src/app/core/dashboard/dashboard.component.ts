import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../abstract-redirect';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { UsersService } from '../services/users.service';

import * as _ from 'lodash';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends AbstractRedirect implements OnInit {

  public isOnlyLunch = false;
  public lunchBoard;
  constructor(
    public securityService: SecurityService,
    public router: Router,
    public userService: UsersService,
    private playService: PlayService
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    this.checkOnlyLunch();
    this.getLunchBoard();
  }

  public checkOnlyLunch(): void {
    this.userService.loggedInUser()
      .subscribe(res => {
        if (res.contests.length === 1 && this.checkLunch(res.contests)) {
          this.isOnlyLunch = true;
        }
      });
  }

  private checkLunch(contests): boolean {
    if (_.indexOf(contests, 1) === -1) {
      return false;
    }
    return true;
  }

  public getLunchBoard(): void {
    this.playService.lunchBoard()
      .subscribe(res => {
        this.lunchBoard = res;
      });
  }


}
