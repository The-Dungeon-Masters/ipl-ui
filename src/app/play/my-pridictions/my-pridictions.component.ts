import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { SecurityService } from '../../core/security.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-my-pridictions',
  templateUrl: './my-pridictions.component.html',
  styleUrls: ['./my-pridictions.component.css']
})
export class MyPridictionsComponent extends AbstractRedirect implements OnInit {

  public match = {};

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
  }

  private getMatch(id): void {
    this.playService.getMatchById(id)
      .subscribe(res => {
        this.match = res;
      });
  }

}
