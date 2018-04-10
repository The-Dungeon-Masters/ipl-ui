import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from './security.service';

export class AbstractRedirect implements OnInit {
  constructor(public securityService: SecurityService, public router: Router) { }

  ngOnInit() {
    if (!this.securityService.currentUser.isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  public isMatchStarted(time, id): boolean {
    const now = new Date();
    const d = new Date(time);
    if (now.getTime() > d.getTime()) {
      this.router.navigate(['/play/match-overview/' + id]);
      return true;
    }
    return false;
  }
}
