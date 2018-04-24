import { Component, OnInit } from '@angular/core';
import { AbstractRedirect } from '../abstract-redirect';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends AbstractRedirect implements OnInit {

  constructor(
    public securityService: SecurityService,
    public router: Router
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
