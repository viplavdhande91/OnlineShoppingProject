import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';
import { TokenstorageService } from 'src/app/services/token/tokenstorage.service';

@Component({
  selector: 'app-ordercatergorypage',
  templateUrl: './ordercatergorypage.component.html',
  styleUrls: ['./ordercatergorypage.component.css'],
})
export class OrdercatergorypageComponent implements OnInit {

  /***
   * Data which we query from Order table
   */

  public orderData: any;

  constructor(
    private http: ExternalApiCallService,
    private router: Router,
    private tokenService: TokenstorageService
  ) { }

  ngOnInit(): void {
  let link = 'https://localhost:7070/api/Home/viplavdhande91@yahoo.com';
  this.http.getApiWithoutParams(link).subscribe((data) => {
    this.orderData = JSON.parse(data);
  });
  }

  
}
