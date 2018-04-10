import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { SecurityService } from '../../core/security.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { Router, ActivatedRoute } from '@angular/router';
import { Errors } from '../../core/errors';
import * as _ from 'lodash';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent extends AbstractRedirect implements OnInit {

  public match;
  public contests;
  public prediction;
  public checkedContests = [];
  public teamContestMap = [];
  public matchOverview;

  public errors = new Errors();
  constructor(
    public securityService: SecurityService,
    public router: Router,
    public playService: PlayService,
    private route: ActivatedRoute
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    const id = +(this.route.snapshot.params.id || 0);
    this.getMatch(id);
    this.getContests();
    this.getMatchOverview(id);
  }

  private getMatch(id): void {
    this.playService.getMatchById(id)
      .subscribe(res => {
        this.match = res;
      });
  }

  public getContests(): void {
    this.playService.getContests()
      .subscribe(res => {
        this.contests = res;
      });
  }

  public predictIt(): void {
    const temp = JSON.stringify({ matchId: +(this.route.snapshot.params.id || 0), contestPredictions: this.teamContestMap });
    this.playService.predict(temp)
    .subscribe(res => {
      this.router.navigate(['/play/my-predictions']);
    }, errors => this.errors = errors);
  }

  // id: contestId
  // event.target.value : teamid
  public teamChanged(id, event) {
    const index = _.indexOf(this.teamContestMap, _.find(this.teamContestMap, { contestId: id }));
    if (index !== -1) {
      this.teamContestMap[index].teamId = +event.target.value;
    }
  }

  public contestChanged(id, event) {
    if (event.target.checked) {
      this.checkedContests.push(id);
      this.teamContestMap.push({'contestId': id, 'teamId': this.match.team1.id});
    } else {
        $('#cont-' + id).prop('selectedIndex', 0);
      _.pull(this.checkedContests, id);
      const index = _.indexOf(this.teamContestMap, _.find(this.teamContestMap, { contestId: id }));
      this.teamContestMap.splice(index, 1);
    }
  }

  public checkDisable(id): boolean {
    if ((_.indexOf(this.checkedContests, id)) !== -1 ) {
      return false;
    }
    return true;
  }

  public getMatchOverview(id) {
    this.playService.getMatchOverview(id).subscribe(match => {
      this.matchOverview = match;
      if (match.contestwisePredictions.length > 0) {
        this.router.navigate(['/play/edit/' + id ]);
      }
    });
  }

}
