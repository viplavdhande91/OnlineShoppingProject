import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenstorageService } from '../token/tokenstorage.service';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ExternalApiCallService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenstorageService
  ) { }

  public postCredentials(link: string, data: any): Observable<any> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(link, data, {
      headers: reqHeader,
      responseType: 'text',
    });
  }

  public postData(link: string, data: any): Observable<any> {
    let auth_token!: string | null;

    auth_token = this.tokenService.getToken();

    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${auth_token}`,
    });

    return this.http.post(link, data, {
      headers: reqHeader,
      responseType: 'text',
    });
  }

  public getApiWithoutParams(link: string): Observable<any> {
    let auth_token!: string | null;

    auth_token = this.tokenService.getToken();
    // console.log(auth_token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });

    const requestOptions = { headers: headers };

    return this.http.get(link, requestOptions);
  }

  public getApiWithParams(
    link: string,
    filterCategoryData: string
  ): Observable<any> {
    let auth_token!: string | null;

    auth_token = this.tokenService.getLoggedInToken();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });

    let queryParams = new HttpParams();
    queryParams = queryParams.append('filterCategoryData', filterCategoryData);
    const requestOptions = { headers: headers, params: queryParams };

    return this.http.get(link, requestOptions);
  }


  public getCartStatus(): any {
    let cartList;

    let loggedInstatus = this.tokenService.checkForLoggedInStatus();
    if (loggedInstatus) {
      let username = this.tokenService.getLoggedInEmail();
      let link = 'https://localhost:7070/api/Home/cart/' + username;

      this.getApiWithoutParams(link).subscribe((data) => {
        cartList = JSON.parse(data);
        // console.log(this.cartList);
      });
    }

    return cartList;
  }



  public deleteWithParams(
    link: string,

  ): Observable<any> {
    let auth_token!: string | null;

    auth_token = this.tokenService.getToken();
    // console.log(auth_token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });

    const requestOptions = { headers: headers };

    return this.http.delete(link, requestOptions);
  }



}
