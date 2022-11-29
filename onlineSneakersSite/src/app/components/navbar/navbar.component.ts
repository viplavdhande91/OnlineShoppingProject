import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExternalApiCallService } from '../../services/ApiCall/external-api-call.service';
import { TokenstorageService } from '../../services/token/tokenstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isMenuCollapsed = true;

  public isLoggedIn= false;
  public isLoggedOut = true;


  constructor(private tokenService: TokenstorageService,
    private http: ExternalApiCallService,
    private router: Router) { }

  ngOnInit(): void {
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
  

  logout(): void {
  }


}
