import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { SecurityService } from '../../core/security.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { Router, ActivatedRoute } from '@angular/router';
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
    console.log(this.teamContestMap);
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

}
