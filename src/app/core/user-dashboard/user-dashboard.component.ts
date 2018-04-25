import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../abstract-redirect';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent extends AbstractRedirect implements OnInit {
  public userPredictions;

  constructor(
    public securityService: SecurityService,
    public router: Router,
    public userService: UsersService,
    private route: ActivatedRoute
  ) {
    super(securityService, router);
  }


  ngOnInit() {
    super.ngOnInit();
    const id = +(this.route.snapshot.params.id || 0);
    this.getPredictions(id);
  }

  public getPredictions(id): void {
    this.userService.matchWisePoints(id)
      .subscribe(res => {
        this.userPredictions = res;
      });

  }
}
