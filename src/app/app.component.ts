import { Component } from '@angular/core';
import { SecurityService } from './core/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public securityService: SecurityService) {  }
}
