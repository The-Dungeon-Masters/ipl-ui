import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../abstract-redirect';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-update-result',
  templateUrl: './update-result.component.html',
  styleUrls: ['./update-result.component.css']
})
export class UpdateResultComponent extends AbstractRedirect implements OnInit {

  public result = {};
  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService
  ) {
    super(
      securityService,
      router
    );
  }

  ngOnInit() {
  }

  public update() {
    this.playService.updateResult(this.result)
      .subscribe(res => {
        alert('done');
      });
  }

}
