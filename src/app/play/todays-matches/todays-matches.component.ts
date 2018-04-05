import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { SecurityService } from '../../core/security.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todays-matches',
  templateUrl: './todays-matches.component.html',
  styleUrls: ['./todays-matches.component.css']
})
export class TodaysMatchesComponent extends AbstractRedirect implements OnInit {

  public todaysMatches= [];

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getTodaysMatches();
  }

  public getTodaysMatches() {
    this.playService.todaysMatches().subscribe(matches => {
      this.todaysMatches = matches;
    });
  }

}
