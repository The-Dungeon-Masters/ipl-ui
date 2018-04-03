import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../security.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public securityService: SecurityService) { }

  public newUser = new User();

  ngOnInit() {
  }

  public login(): void {
    debugger;
    this.securityService.authenticate(this.newUser).subscribe(user => {
      console.log(user);
    });
  }
}
