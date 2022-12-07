import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';
import { TokenstorageService } from '../../../services/token/tokenstorage.service';

@Component({
  selector: 'app-orderspecificpage',
  templateUrl: './orderspecificpage.component.html',
  styleUrls: ['./orderspecificpage.component.css'],
})
export class OrderspecificpageComponent implements OnInit {
  /***
   * Data which we query from Order table
   */

  public orderData: any;

  /***
   * Billing data
   */

  public BillingData: any;

  /***
   * total cart cost
   */

   public BillingInfoCost: any;

   /***
    * total cart cost
    */
 


  constructor(
    private http: ExternalApiCallService,
    private router: Router,
    private tokenService: TokenstorageService
  ) { }

  ngOnInit(): void {
    this.getBillingInfoCost();

    this.getBillingInfoData();

    this.getOrderData();




  }

  public getBillingInfoData(): void {
    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/billingInfo/' + username;

      this.http.getApiWithoutParams(link).subscribe((data) => {
        this.BillingData = JSON.parse(data);
        console.log('billingdata', this.BillingData);

      });
    }
  }


  public getBillingInfoCost(): void {
    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/billingInfoCost/' + username;

      this.http.getApiWithoutParams(link).subscribe((data) => {
        this.BillingInfoCost = JSON.parse(data);
        console.log('BillingInfoCost', this.BillingInfoCost);

      });
    }
  }

  public getOrderData(): void {
    let username = this.tokenService.getLoggedInEmail();
    let link = 'https://localhost:7070/api/Home/' + username;
    this.http.getApiWithoutParams(link).subscribe((data) => {
      this.orderData = JSON.parse(data);

      this.calculateTotalValue();

    });
  }

  public calculateTotalValue(): void {

    for (let item in this.orderData) {
      for (let order in this.orderData[item]) {

        for (let k in this.BillingData) {

          if (this.BillingData[k].billingId === item && this.BillingData[k].ProductId === this.orderData[item][order][0].ProductId) {
            this.orderData[item][order][0].ProductQuantity = this.BillingData[k].Quantity;
               
              
          }
        }
      }
    }





  }
}
