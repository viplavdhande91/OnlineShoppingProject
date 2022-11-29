import { Component, OnInit } from '@angular/core';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  faHeart = faHeart;
  constructor() { }

  ngOnInit(): void {
  }

}
