import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { User } from '../model/user';
import { Errors } from '../errors';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public errors = new Errors();

  constructor(public securityService: SecurityService, private router: Router) { }

  public user = new User();

  ngOnInit() {
    if (this.securityService.currentUser.isAuthenticated) {
      this.router.navigate(['/play']);
    }
  }

  public login(): void {
    this.securityService.authenticate(this.user).subscribe(user => {
      this.router.navigate(['/play']);
    },
    errors =>  {
      this.errors = errors;
    });
  }
}
