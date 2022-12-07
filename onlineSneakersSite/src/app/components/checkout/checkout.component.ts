import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';
import { TokenstorageService } from '../../services/token/tokenstorage.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private http: ExternalApiCallService,
    private tokenService: TokenstorageService,
    private router: Router) { }

  ngOnInit(): void {

    this.getCartData();

  }


  /***
  * Cart List Data
  */

  public cartList: any;

  /***
  * total cart cost
  */

  public subTotal !: number;

  public total !: number;

  /***
      * cart items
      */
  public numberOfItemsInCart!: number;

  public getCartData(): void {

    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/cart/' + username;

      this.http.getApiWithoutParams(link).subscribe((data) => {

        this.cartList = JSON.parse(data);
        this.calculateTotalValue();
        if (this.cartList.length === 0) {
          this.numberOfItemsInCart = 0;
        }
        else if (this.cartList.length > 0) {

          this.numberOfItemsInCart = this.cartList.length;
        }


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



  public saveBillingInfo(item: any) {

    console.log(item);
    const myId = uuid.v4();

  
    let billingData = {
      billingId: myId,
      UserName: this.tokenService.getLoggedInEmail(),
      FirstName: item['firstName'],
      LastName: item['lastName'],
      Address: item['adress'],
      State: item['state'],
      Country: item['country'],
      ZipCode:parseInt(item['zip']), 
      Price: this.total,
      Quantity: this.numberOfItemsInCart,
      ProcessedStatus: true,
      TrackingStatus: "In Transit",
      MobileNo : item['mobile'],
      TotalCost : this.total
    };
    console.warn(billingData);


    let link = 'https://localhost:7070/api/Home/billinginfo';
    this.http.postData(link, billingData).subscribe((response) => {
      if (response === '1') {
        this.router.navigate(['orderdashboard']);
      } else if (response === '0' && response === null) {
        alert('billing data saving not done');
      }
    });


  }


}


