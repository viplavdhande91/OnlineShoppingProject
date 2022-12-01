import { Component, OnInit } from '@angular/core';
import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';
import { TokenstorageService } from '../../services/token/tokenstorage.service';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {  faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {  faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import {  faUser } from '@fortawesome/free-solid-svg-icons';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import {  faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;

  public isLoggedIn = false;
  public isLoggedOut = true;

  /***
   *variable used for fa-icons display
   */
   faShoppingBag = faShoppingBag;

   faSignOutAlt = faSignOutAlt;
   faSignInAlt = faSignInAlt;
   faDesktop = faDesktop;
   faShoppingCart =faShoppingCart;

   faUser = faUser;

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
