import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users.service';
import { PlayService } from '../services/play.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = {};

  public contests = [];

  public newContests = [];

  constructor(
    public userService: UsersService,
    public playService: PlayService
  ) { }

  ngOnInit() {
    this.getAllContests();
  }

  public getAllContests(): void {
    this.playService.getAllContests()
      .subscribe(res => {
        this.contests = res;
      });
  }

  public addUser(): void {
    this.userService.addUser(this.user, this.newContests)
      .subscribe(res => {
        console.log(res);
      });
  }

  private contestChanged(id, event) {
    if (event.target.checked) {
      this.newContests.push(id);
    } else {
      _.pull(this.newContests, id);
    }
  }
}
