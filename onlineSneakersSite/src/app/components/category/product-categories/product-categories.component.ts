import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ExternalApiCallService } from '../../../services/ApiCall/external-api-call.service';
@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css'],
})
export class ProductCategoriesComponent implements OnInit {
  /***
   *variable used for fa-icons display
   */
  faHeart = faHeart;

  /***
   * Data which we query from Product table
   */

  public ProductDataList: any;

  constructor(private http: ExternalApiCallService) {}

  ngOnInit(): void {
    
    let link = 'https://localhost:7070/api/Home/ProductsList';
    this.http.getApiWithoutParams(link).subscribe((data) => {
      // console.log(data);
      this.ProductDataList = JSON.parse(data);
    });
  }
}
