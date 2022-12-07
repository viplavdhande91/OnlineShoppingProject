import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenstorageService } from 'src/app/services/token/tokenstorage.service';
//import { TokenstorageService } from '../../services/token/tokenstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  link = 'https://localhost:7070/Auth/login';

  jwtToken = '-1';


  loginToastrValidationFlag = false;


  public spinnerActive = false;

  constructor(
    private http: ExternalApiCallService,
    private router: Router,
    private tokenService: TokenstorageService
  ) {}
  // ngAfterViewChecked()	:void{
  //   console.log("Login loaded")

  // }
  ngOnInit(): void {


  }

  public loginForm(item: any) {
    // console.warn(item);
    this.loginToastrValidationFlag = false;

    this.spinnerActive = true;
    const myId = uuid.v4();
    let data = {
      userId: myId,
      emailAddress: item['email'],
      password: item['password'],
      firstName: '',
      lastName: '',
      role: '',
    };

    this.http.postCredentials(this.link, data).subscribe((response) => {
      this.jwtToken = response;
      console.log("resp  ",response);
      
      

      if (this.jwtToken === 'fail') {
        console.log("wrong password hit")
        console.log("loginToastrValidationFlag: ",this.loginToastrValidationFlag)

        setTimeout(() => {
          this.spinnerActive = false;
          this.loginToastrValidationFlag = true;
          this.router.navigate(['login']);

        }, 1500);

      
      } else {
       
        this.tokenService.saveToken(this.jwtToken);
        this.tokenService.saveLoggedinToken();
        this.tokenService.saveLoggedinEmail(data.emailAddress);
        console.log("right password hit")

        window.location.href = 'orderdashboard';

      }
    });
  }
}
