import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';
import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenstorageService } from '../../services/token/tokenstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  link = 'https://localhost:7070/Auth/login';

  jwtToken = '1';

  public spinnerActive = false;

  constructor(
    private http: ExternalApiCallService,
    private router: Router,
    private tokenService: TokenstorageService
  ) {}

  ngOnInit(): void {}

  public loginForm(item: any) {
    // console.warn(item);
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

    this.http.postData(this.link, data).subscribe((response) => {
      this.jwtToken = response;

      if (this.jwtToken !== '1') {
        this.tokenService.saveToken(this.jwtToken);
        this.tokenService.saveLoggedinToken();
        this.tokenService.saveLoggedinEmail(data.emailAddress);

        setTimeout(() => {
          this.spinnerActive = false;
          this.router.navigate(['orderdashboard']);
        }, 2000);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}
