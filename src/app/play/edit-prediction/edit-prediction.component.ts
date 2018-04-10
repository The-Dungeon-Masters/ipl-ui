import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { SecurityService } from '../../core/security.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Errors } from '../../core/errors';
import * as _ from 'lodash';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-edit-prediction',
  templateUrl: './edit-prediction.component.html',
  styleUrls: ['./edit-prediction.component.css']
})
export class EditPredictionComponent extends AbstractRedirect implements OnInit {
  public checkedContests = [];
  public match;
  public contests;
  public teamContestMap = [];

  public errors = new Errors();
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
    this.getMatch(id);
    this.getContests();
    this.getPreviousPredictions(id);
  }

  private getMatch(id): void {
    this.playService.getMatchById(id)
      .subscribe(res => {
        this.match = res;
        this.isMatchStarted(res.startTime, id);
      });
  }

  public edit(): void {
    const temp = JSON.stringify({ matchId: +(this.route.snapshot.params.id || 0), contestPredictions: this.teamContestMap });
    this.playService.editPredict(temp)
    .subscribe(res => {
      this.router.navigate(['/play/my-predictions']);
    }, errors => this.errors = errors);
  }

  public getContests(): void {
    this.playService.getContests()
      .subscribe(res => {
        this.contests = res;
      });
  }

  public getPreviousPredictions(id): void {
    this.playService.getMatchPredictions(id)
      .subscribe(res => {
        this.teamContestMap = res.contestPredictions;
      });
  }

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
}
