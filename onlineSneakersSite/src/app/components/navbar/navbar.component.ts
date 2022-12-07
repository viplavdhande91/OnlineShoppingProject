import { Component, OnInit } from '@angular/core';
import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { TokenstorageService } from 'src/app/services/token/tokenstorage.service';

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
  faShoppingCart = faShoppingCart;

  faUser = faUser;

  /***
   * Cart List Data
   */

  public cartList: any;

  public loggedInstatus !: boolean;

  /***
    * Helper variable to get status of cart after logged in
    */
  public cartDataRecievedNotstatus = true;


  /***
    * cart items
    */
   public numberOfItemsInCart!: number;


   /***
    * Is user admin?
    */
    public admin = false;


  constructor(private tokenService: TokenstorageService,
    private http: ExternalApiCallService) { }



  ngOnInit(): void {
    this.getCartData();

    
    //console.log(this.numberOfItemsInCart)



  }


  ngDoCheck() {

    this.loggedInstatus = this.tokenService.checkForLoggedInStatus();

    this.sellerValidate();

    if (this.loggedInstatus) {

        this.isLoggedIn = true;
        this.isLoggedOut = false;



    }
  }

  ngOnDestroy() {
    // ...
  }

  public getCartData(): void {
    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/cart/' + username;

      this.http.getApiWithoutParams(link).subscribe((data) => {
        this.cartList = JSON.parse(data);
        if(this.cartList.length === 0){
          this.numberOfItemsInCart = 0;
        }
        else if(this.cartList.length > 0){
         this.numberOfItemsInCart =  this.cartList.length;
        }

      });
    }

  }

  public sellerValidate(): void {
    let loggedInuser = this.tokenService.getLoggedInEmail();

    if(loggedInuser != null ){
      let result = loggedInuser.includes("@admin.com");

      if(result){
        this.admin = true;
      }
      

    }
    

  }


}
