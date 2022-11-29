import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalApiCallService {


  constructor(private http: HttpClient) { }

  public postData(link: string, data: any): Observable<any> {

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });


    return this.http
      .post(link, data, { headers: reqHeader, responseType: 'text' });

  }


  public getApi(link: string,auth_token: string | null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept'       : 'application/json',
      'Authorization': `Bearer ${auth_token}`,
    });

    const requestOptions = { headers: headers,};



    return this.http.get(link,requestOptions);
  }
}
