import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../core/services/play.service';
import { AbstractRedirect } from '../../core/abstract-redirect';
import { SecurityService } from '../../core/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-prediction',
  templateUrl: './edit-prediction.component.html',
  styleUrls: ['./edit-prediction.component.css']
})
export class EditPredictionComponent extends AbstractRedirect implements OnInit {

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
