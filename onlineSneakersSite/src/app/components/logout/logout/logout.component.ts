import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from 'src/app/services/ApiCall/external-api-call.service';
import { TokenstorageService } from 'src/app/services/token/tokenstorage.service';

@Component({
  selector: 'app-logout',
  template: `
    
  `,
  styles: [
  ]
})
export class LogoutComponent implements OnInit {
 

  constructor(private tokenService: TokenstorageService,
    private http: ExternalApiCallService,
    private router: Router,) { }

  ngOnInit(): void {
    let token = this.tokenService.signOut();
    // this.router.navigate(['login']);

    window.location.href = 'login/';


  
  }

}
