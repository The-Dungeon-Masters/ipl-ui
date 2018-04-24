import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {

  public userBoard;

  constructor(
    public userService: UsersService
  ) { }

  ngOnInit() {
    this.getUserBoard();
  }

  public getUserBoard(): void {
    this.userService.getUserBoard()
      .subscribe(res => {
        this.userBoard = res;
      });
  }
}
