import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';

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

  constructor(private router: Router, private http: ExternalApiCallService) {}

  ngOnInit(): void {
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


  calculateStuff(): number {
   
    let orignalPrice = this.ProductData[0].Price;
    let discountedPrice = this.ProductData[0].DiscountedPrice;

    let discount = ((orignalPrice -discountedPrice)/orignalPrice)*100;

    return  (Math.floor(discount));


  }
}
