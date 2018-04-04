import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  public allMatches = [];

  constructor(public playService: PlayService) { }

  ngOnInit() {
    this.getAllMatches();
  }

  public getAllMatches() {
    this.playService.getAllMatches().subscribe(matches => {
      this.allMatches = matches;
    });
  }

}
