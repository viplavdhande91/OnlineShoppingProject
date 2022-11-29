import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';
import { InputValidationService } from 'src/app/services/input-validation.service';
import { ToastrService } from 'src/app/services/toastr/toastr.service';

import * as uuid from 'uuid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

   link = "https://localhost:7070/Auth/signup";

  constructor(private router: Router, private http: ExternalApiCallService) {}

  ngOnInit(): void {}




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
      

    this.http.postData(this.link,data).subscribe((response) => {
      
      if (response === '1') {
        alert('Registration Successful');
        window.location.href = 'login/';
      } else if (response === '0' && response === null) {
        alert('Registration UnSuccesful');
      }
    });

   
  }

}
