import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
@Component({
  selector: 'app-todays-matches',
  templateUrl: './todays-matches.component.html',
  styleUrls: ['./todays-matches.component.css']
})
export class TodaysMatchesComponent implements OnInit {

  public todaysMatches= [];
  constructor(public playService: PlayService) { }

  ngOnInit() {
    this.getTodaysMatches();
  }

  public getTodaysMatches() {
    this.playService.todaysMatches().subscribe(matches => {
      this.todaysMatches = matches;
    });
  }

}
