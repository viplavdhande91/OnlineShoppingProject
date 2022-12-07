import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenstorageService } from '../../../services/token/tokenstorage.service';
import { ExternalApiCallService } from '../../../services/ApiCall/external-api-call.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent implements OnInit {

  /***
     *variable used for fa-icons display
     */
  faTrashAlt = faTrashAlt;

  /***
   * Cart List Data
   */

  public cartList: any;

  /***
  * total cart cost
  */

  public subTotal !: number;

  public total !: number;


  constructor(private http: ExternalApiCallService,
    private tokenService: TokenstorageService,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.getCartData();


  }


  public getCartData(): void {

    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/cart/' + username;

      this.http.getApiWithoutParams(link).subscribe((data) => {
        this.cartList = JSON.parse(data);
        this.calculateTotalValue();
        console.log("CART COMPONENT", this.cartList);
      });
    }

  }


  public calculateTotalValue(): void {

    this.subTotal = 0;
    for (let item in this.cartList) {

      this.subTotal += (this.cartList[item].TotalPrice) * this.cartList[item].Quantity;

    }

    this.total = this.subTotal + 100;



  }


  public checkoutRedirect(): void {
    this.router.navigate(['checkout']);

  }



  public deleteFromCart(cartId: string): void {

   // console.log("CARtId", cartId);

    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/deleteItem/' + cartId;

      this.http.deleteWithParams(link).subscribe((data) => {

        location.reload();
      });
    }

  }
}
