import { Component, OnInit } from '@angular/core';
import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';
import { TokenstorageService } from '../../services/token/tokenstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;

  public isLoggedIn = false;
  public isLoggedOut = true;

  constructor(private tokenService: TokenstorageService) {}

  ngOnInit(): void {
    
  }
  ngDoCheck() {
    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    //  console.log("authenticated in navbar")

    if (loggedInstatus) {
      this.isLoggedIn = true;
      this.isLoggedOut = false;
    }
  }

  ngOnDestroy() {
    // ...
  }

  logout(): void {}
}
