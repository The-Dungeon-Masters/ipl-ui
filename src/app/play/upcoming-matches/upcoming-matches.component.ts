import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { SecurityService } from '../../core/security.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent extends AbstractRedirect implements OnInit {

  public upComing = [];

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getUpcoming();
  }

  public getUpcoming() {
    this.playService.upComingMatches().subscribe(matches => {
      this.upComing = matches;
    });
  }
}
