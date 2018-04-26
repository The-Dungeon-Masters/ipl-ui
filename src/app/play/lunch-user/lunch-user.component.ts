import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { PlayService } from '../../core/services/play.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityService } from '../../core/security.service';

@Component({
  selector: 'app-lunch-user',
  templateUrl: './lunch-user.component.html',
  styleUrls: ['./lunch-user.component.css']
})
export class LunchUserComponent extends AbstractRedirect implements OnInit {

  public lunchUser;
  constructor(
    public securityService: SecurityService,
    public router: Router,
    private route: ActivatedRoute,
    public playService: PlayService
  ) {
    super(
      securityService,
      router
    );
  }

  ngOnInit() {
    super.ngOnInit();
    const id = +(this.route.snapshot.params.id || 0);
    this.loadUser(id);
  }

  public loadUser(id): void {
    this.playService.lunchUser(id)
      .subscribe(res => {
        this.lunchUser = res;
      });
  }

}
