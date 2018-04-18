import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { SecurityService } from '../../core/security.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.css']
})
export class MatchOverviewComponent extends AbstractRedirect implements OnInit {

  public match;
  public id;
  public matchOverview;
  public predictions;
  public result: any = {};
  public userDetail = {};

  constructor(
    public securityService: SecurityService,
    public router: Router,
    public playService: PlayService,
    private route: ActivatedRoute,
    private userService: UsersService
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    const id = +(this.route.snapshot.params.id || 0);
    this.id = id;
    this.getMatchOverview(id);
    this.getMatchDetail(id);
    this.getMatchPredictions(id);
    this.getUserDetail();
    this.result.matchId = id;
  }

  public getMatchDetail(id) {
    this.playService.getMatchById(id).subscribe(match => {
      this.match = match;
      this.result.winningTeamId = match.team1.id;
    });
  }

  public getMatchPredictions(id): void {
    this.playService.getMatchPredictions(id).subscribe(prediction => {
      this.predictions = prediction;
    });
  }


  public getMatchOverview(id) {
    this.playService.getMatchOverview(id).subscribe(match => {
      this.matchOverview = match;
    });
  }

  public update() {
    this.playService.updateResult(this.result)
      .subscribe(res => {
        alert('done');
      });
  }

  public getUserDetail() {
    this.userService.loggedInUser()
      .subscribe(res => {
        this.userDetail = res.user;
      });
  }

}
