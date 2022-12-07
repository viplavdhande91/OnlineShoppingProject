import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { TokenstorageService } from 'src/app/services/token/tokenstorage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /***
   * Data which we query from Order table
   */

   public useData: any;

  constructor(   private router: Router,
    private http: ExternalApiCallService,
    private tokenService: TokenstorageService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData(): void {
    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/users/' + username;

      this.http.getApiWithoutParams(link).subscribe((data) => {
        this.useData = JSON.parse(data);
      //  console.log('useData', this.useData);

      });
    }
  }


  public deleteUser(UserId :string) :void {

  // console.log("UserId", UserId);

    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/deleteUser/' + UserId;

      this.http.deleteWithParams(link).subscribe((data) => {

        location.reload();
      });
    }

  }

  public redirectToUser(){


    this.router.navigate(['signup']);

  }

}
