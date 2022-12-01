import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { TokenstorageService } from '../token/tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiCallService {


  constructor(private http: HttpClient,
    private tokenService: TokenstorageService
  ) { }

  public postData(link: string, data: any): Observable<any> {

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });


    return this.http
      .post(link, data, { headers: reqHeader, responseType: 'text' });

  }


  public getApiWithoutParams(link: string): Observable<any> {
    let auth_token!: string | null;

    auth_token = this.tokenService.getToken()
    // console.log(auth_token);


    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json',
      'Authorization': `Bearer ${auth_token}`,
    });

    const requestOptions = { headers: headers, };



    return this.http.get(link, requestOptions);
  }


  // public getApiWithParams(link: string): Observable<any> {
  //   let auth_token!: string | null;

  //   auth_token = this.tokenService.getLoggedInToken()


  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json; charset=utf-8',
  //     'Accept': 'application/json',
  //     'Authorization': `Bearer ${auth_token}`,
  //   });


  //   let queryParams = new HttpParams();
  //   queryParams = queryParams.append("email", this.tokenService.getLoggedInEmail());
  //   const requestOptions = { headers: headers,params:queryParams };



  //   return this.http.get(link, requestOptions);
  // }
}
