import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from '../ApiCall/external-api-call.service';

const TOKEN_KEY = 'auth-token';
const LOGGED_IN_STATUS = 'logged_in_status';
const LOGGED_IN_EMAIL = 'logged_in_email';
const ITEMS_IN_CART = 'ITEMS_IN _CART';


@Injectable({
  providedIn: 'root',
})
export class TokenstorageService {
  constructor(
  ) { }

  public checkForLoggedInStatus(): boolean {

    let loggedInstatus = this.getLoggedInToken();
    if (loggedInstatus === 'true') {
      return true;
    }
    return false;
  }

  public signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveLoggedinToken() {
    window.sessionStorage.removeItem(LOGGED_IN_STATUS);
    window.sessionStorage.setItem(LOGGED_IN_STATUS, 'true');
  }

  public getLoggedInToken(): string | null {
    return sessionStorage.getItem(LOGGED_IN_STATUS);
  }

  public saveLoggedinEmail(email : string) {
    window.sessionStorage.removeItem(LOGGED_IN_EMAIL);
    window.sessionStorage.setItem(LOGGED_IN_EMAIL, email);
  }

  public getLoggedInEmail(): string {
    return sessionStorage.getItem(LOGGED_IN_EMAIL) as string;
  }
   

   





}
