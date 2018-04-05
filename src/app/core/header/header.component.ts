import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SecurityService } from '../security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += 'responsive';
    } else {
      x.className = 'topnav';
    }
  }

  private logout() {
    SecurityService.removeSecurityToken();
    this.router.navigate(['/login']);
  }

}
