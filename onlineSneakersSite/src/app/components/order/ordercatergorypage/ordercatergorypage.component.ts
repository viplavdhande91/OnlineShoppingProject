import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';
import { TokenstorageService } from 'src/app/services/token/tokenstorage.service';

@Component({
  selector: 'app-ordercatergorypage',
  templateUrl: './ordercatergorypage.component.html',
  styleUrls: ['./ordercatergorypage.component.css'],
})
export class OrdercatergorypageComponent implements OnInit {

  
  public isLoggedIn= false;
  public isLoggedOut = true;

  constructor(
    private tokenService: TokenstorageService,
    private http: ExternalApiCallService,
    private router: Router,

  ) { }

  ngOnInit():void {
    let token = this.tokenService.getToken();
    let link = 'https://localhost:7070/Home';

    let response = '';
    this.http.getApi(link, token).subscribe((data) => {
      response = data;
      console.log(response);
      console.log(typeof response);

      if (response === "AccessGranted") {
        this.isLoggedIn =true;
        this.isLoggedOut = false;
        this.router.navigate(['categories']);

      }
      else {
        this.router.navigate(['login']);

      }
    });
  }
}
