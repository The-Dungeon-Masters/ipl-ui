import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-top-gainers',
  templateUrl: './top-gainers.component.html',
  styleUrls: ['./top-gainers.component.css']
})
export class TopGainersComponent implements OnInit {


  public gainers;

  constructor(
    public userService: UsersService
  ) { }

  ngOnInit() {
    this.getUserBoard();
  }

  public getUserBoard(): void {
    this.userService.topGainers()
      .subscribe(res => {
        this.gainers = res;
      });
  }
}
