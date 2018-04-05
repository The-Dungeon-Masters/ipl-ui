import { Component, OnInit } from '@angular/core';
import { PlayService } from '../services/play.service';
import { SecurityService } from '../security.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public playService: PlayService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    // this.playService.getAllMatches().subscribe(user => {
    //   console.log(user);
    // });
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
