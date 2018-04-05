import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { SecurityService } from '../../core/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.css']
})
export class MatchOverviewComponent extends AbstractRedirect implements OnInit {

  public match = {};

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    this.getMatchOverview();
  }

  public getMatchOverview() {
    this.playService.getMatchOverview(1).subscribe(match => {
      this.match = match;
    });
  }

}
