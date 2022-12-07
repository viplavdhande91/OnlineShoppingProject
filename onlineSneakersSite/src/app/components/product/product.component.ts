import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';
import { TokenstorageService } from '../../services/token/tokenstorage.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  produtIdUrl!: string;

  /***
   * Data which we query from Order table
   */

  public ProductData: any = [{}];

  /***
   * Current Displaying image over selection
   */

  public currentImage!: string;

  /***
   * Cart List Data
   */

  public cartList: any;

  public spinnerActive = false;

  public link = 'https://localhost:7070/Auth/login';

  public selectedOption!: any;
  /***
   * Add to Cart and Added to Cart button status
   */

  public add_To_Cart!: Boolean;
  public added_To_Cart!: Boolean;

  constructor(
    private router: Router,
    private http: ExternalApiCallService,
    private tokenService: TokenstorageService
  ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCartDataAndStatus();
  }

  public getCartDataAndStatus(): void {
    //CART STATUS FOR CURRENT LOGGED IN USER
    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    console.log('logged in status', loggedInstatus);

    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/cart/' + username;

      this.http.getApiWithoutParams(link).subscribe((data) => {
        this.cartList = JSON.parse(data);
        console.log('cart list', this.cartList);

        if (this.cartList.length === 0) {
          this.add_To_Cart = true;
          this.added_To_Cart = false;
        } else if (this.cartList.length > 0) {
          for (let cartItem in this.cartList) {
           
            if (this.cartList[cartItem].ProductId === this.ProductData[0].ProductId) {

             // console.log("if hit")
              this.add_To_Cart = false;
              this.added_To_Cart = true;
              break;
            } else  if (this.cartList[cartItem].ProductId !== this.ProductData[0].ProductId) {
            //  console.log("else hit")

              this.add_To_Cart = true;
              this.added_To_Cart = false;
            }
          }
        }
      });
    }
  }

  public getProduct(): void {
    this.produtIdUrl = this.router.url;

    let link = 'https://localhost:7070' + this.produtIdUrl;

    this.http.getApiWithoutParams(link).subscribe((data) => {
      this.ProductData = JSON.parse(data);
      if (this.ProductData != null) {
        this.currentImage =
          '/assets/images/' + this.ProductData[0].ImageFolderName + '/img1.png';
      }
    });
  }

  public changeImage(element: any): void {
    this.currentImage = element;
    console.log(element);
  }

  public calculateStuff(): number {
    let orignalPrice = this.ProductData[0].Price;
    let discountedPrice = this.ProductData[0].DiscountedPrice;

    let discount = ((orignalPrice - discountedPrice) / orignalPrice) * 100;

    return Math.floor(discount);
  }

  public getTodaysDate(): string {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let todaysDate = mm + '/' + dd + '/' + yyyy;

    return todaysDate;
  }

  public addToCart() {
    // console.warn(item);
    this.spinnerActive = true;
    const myId = uuid.v4();
    let cartData = {
      CartId: myId,
      UserName: this.tokenService.getLoggedInEmail(),
      TotalPrice: this.ProductData[0].Price,
      DiscountedPrice: this.ProductData[0].DiscountedPrice,
      ProductId: this.ProductData[0].ProductId,
      ProductName: this.ProductData[0].ProductName,
      DateAdded: this.getTodaysDate(),
      Quantity: parseInt(this.selectedOption),
      ImageFolderName : this.ProductData[0].ImageFolderName
      
    };

    console.log('current product', this.ProductData[0]);
    console.log('cart ', cartData);
    // setTimeout(() => {
    //         this.spinnerActive = true;
    //       }, 1000);
    let link = 'https://localhost:7070/api/Home/cartpopulate';
    this.http.postData(link, cartData).subscribe((response) => {
      if (response === '1') {
        window.location.href = 'cartpage';

      } else if (response === '0' && response === null) {
        alert('data saving not done');
      }
    });

    // this.http.postData(this.link, data).subscribe((response) => {
    //   this.jwtToken = response;

    //   if (this.jwtToken !== '1') {
    //     this.tokenService.saveToken(this.jwtToken);
    //     this.tokenService.saveLoggedinToken();
    //     this.tokenService.saveLoggedinEmail(data.emailAddress);

    //     setTimeout(() => {
    //       this.spinnerActive = false;
    //       this.router.navigate(['orderdashboard']);
    //     }, 1500);
    //   } else {
    //     this.router.navigate(['login']);
    //   }
    // });
  }
}
