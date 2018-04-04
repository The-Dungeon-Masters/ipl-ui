import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.css']
})
export class MatchOverviewComponent implements OnInit {

  public match = {};

  constructor(public playService: PlayService) { }

  ngOnInit() {
    this.getMatchOverview();
  }

  public getMatchOverview() {
    this.playService.getMatchOverview(1).subscribe(match => {
      this.match = match;
    });
  }

}
