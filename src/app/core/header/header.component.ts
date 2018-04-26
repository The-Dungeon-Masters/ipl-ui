import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../security.service';
import { UsersService } from '../services/users.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLunch = false;
  public userData: any;

  constructor(private router: Router, public userService: UsersService) { }

  ngOnInit() {
    this.getLoggedInUser();
  }

  myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += 'responsive';
    } else {
      x.className = 'topnav';
    }
  }

  private logout() {
    SecurityService.removeSecurityToken();
    this.router.navigate(['/login']);
  }

  public getLoggedInUser(): void {
    this.userService.loggedInUser()
      .subscribe(res => {
        this.userData = res.user;
        if (res.contests.length > 1 && this.checkLunch(res.contests)) {
          this.isLunch = true;
        }
      });
  }


  private checkLunch(contests): boolean {
    if (_.indexOf(contests, 1) === -1) {
      return false;
    }
    return true;
  }

}
