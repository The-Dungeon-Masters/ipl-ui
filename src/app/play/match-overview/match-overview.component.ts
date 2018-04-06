import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { SecurityService } from '../../core/security.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.css']
})
export class MatchOverviewComponent extends AbstractRedirect implements OnInit {

  public match;
  public matchOverview;

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService,
    private route: ActivatedRoute
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    const id = +(this.route.snapshot.params.id || 0);
    this.getMatchOverview(id);
    this.getMatchDetail(id);
  }

  public getMatchDetail(id) {
    this.playService.getMatchById(id).subscribe(match => {
      this.match = match;
    });
  }

  public getMatchOverview(id) {
    this.playService.getMatchOverview(id).subscribe(match => {
      this.matchOverview = match;
    });
  }

}
