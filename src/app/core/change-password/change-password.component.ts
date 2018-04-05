import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';
import { AbstractRedirect } from '../abstract-redirect';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
import { Errors } from '../errors';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends AbstractRedirect implements OnInit {

  public errors = new Errors();

  public password = {};

  constructor(
    public securityService: SecurityService,
    public router: Router ,
    public playService: PlayService
  ) {
    super(securityService, router);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
