import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { Router } from '@angular/router';
import { SecurityService } from '../../core/security.service';
import { PlayService } from '../../core/services/play.service';

@Component({
  selector: 'app-lunch-board',
  templateUrl: './lunch-board.component.html',
  styleUrls: ['./lunch-board.component.css']
})
export class LunchBoardComponent extends AbstractRedirect implements OnInit {

  public lunchBoard;

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService
  ) {
    super(
      securityService,
      router
    );
   }

  ngOnInit() {
    super.ngOnInit();
    this.getLunchBoard();
  }

  public getLunchBoard(): void {
    this.playService.lunchBoard()
      .subscribe(res => {
        this.lunchBoard = res;
      });
  }
}
