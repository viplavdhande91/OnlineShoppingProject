import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { ExternalApiCallService } from '../../../services/ApiCall/external-api-call.service';

import { IFilter } from '../../../Models/GeneralInterfaces';
import { of } from 'rxjs';

interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
}
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

  /***
   * Filtered Data for Product Table
   */

  public ProductFilterList: any;

  /***
   * Object used to filter table
   */

  
  public filterItems: IFilter = {
    intel_i3: true,
    intel_i5: true,
    intel_i7: true,
    apple_m1: true,
    apple: true,
    asus: true,
    dell: true,
    lenovo: true,
    acer: true,
    laptop: true,
    desktop: true,
    touch: true,
    tablets: true,
  };

  // filterItems = { intel5: true, intel7: true};

  constructor(private http: ExternalApiCallService,
    ) { }

  ngOnInit(): void {
    let link = 'https://localhost:7070/api/Home/ProductsList';
    this.http.getApiWithoutParams(link).subscribe((data) => {
      this.ProductDataList = JSON.parse(data);
      this.ProductFilterList = this.ProductDataList;
      console.log("this.ProductDataList",this.ProductDataList);
    });

    
  }

  public filterChange() {
    this.ProductFilterList = this.ProductDataList.filter((x: { Processor: string, brand: string,category:string }) =>
      (x.Processor === 'i3' && this.filterItems.intel_i3) ||
      (x.Processor === 'i5' && this.filterItems.intel_i5) ||
      (x.Processor === 'i7' && this.filterItems.intel_i7) ||
      (x.category === 'desktop' && this.filterItems.desktop) ||
      (x.category === 'laptop' && this.filterItems.laptop) ||
      (x.category === 'tablet' && this.filterItems.tablets) ||
      (x.brand === 'Dell' && this.filterItems.dell) ||
      (x.brand === 'Apple' && this.filterItems.apple) ||
      (x.brand === 'Acer' && this.filterItems.acer) ||
      (x.brand === 'Lenovo' && this.filterItems.lenovo) ||

      ((x.Processor === 'm1_chip' && this.filterItems.apple_m1 ||x.category==='laptop' &&this.filterItems.apple_m1|| x.brand === "Apple" && this.filterItems.apple)))


  }
}
