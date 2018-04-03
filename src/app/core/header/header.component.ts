import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public playService: PlayService) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.playService.getAllMatches().subscribe(user => {
      console.log(user);
    });
  }


}
