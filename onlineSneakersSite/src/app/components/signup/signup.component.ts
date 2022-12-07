import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';

import * as uuid from 'uuid';
import { IPasswordCheck } from 'src/app/Models/GeneralInterfaces';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  link = 'https://localhost:7070/Auth/signup';

  show = false;

  public passwordcheck: IPasswordCheck = {
    password: '',
    confirmPassword: '',
  };
  constructor(
    private router: Router,
    private http: ExternalApiCallService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void { }
  public signupForm(item: any): void {
    console.warn(item);

    let breakCheck = false;

    for (let key in item) {
      let value = item[key];

      if (value.length == 0) {
        breakCheck = true;
        break;
      }
    }
    const myId = uuid.v4();

    let data = {
      userId: myId,
      emailAddress: item['email'],
      password: item['confirmpassword'],
      firstName: item['firstname'],
      lastName: item['lastname'],
      role: item['selectusertype'],
    };

    this.http.postCredentials(this.link, data).subscribe((response) => {
      if (response === '1') {
       // alert('Registration Successful');
        //window.location.href = 'login/';
        //        this.router.navigate(['login']);


        setTimeout(() => {
          this.show = true;
          this.router.navigate(['login']);
        }, 2000);

        this.show = true;
      } else if (response === '0' && response === null) {
        alert('Registration UnSuccesful');
      }
    });
  }


}
