import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router
  ) {}

  isLoggedIn= false;
  baseUrl = environment.baseUrl;


  isAuthenticated(){
    return this.isLoggedIn
  }


  login(body:any):Observable<any>{

    return this.http.post<any>(this.baseUrl + 'rest/home/login',body);

  }


  getUser(){
    const token=localStorage.getItem("TKN");

    let headers = new HttpHeaders();
    headers=headers.set("Authorization","Bearer "+ token);

    return this.http.get<any>(this.baseUrl + 'getuser',{headers:headers})
  }

  becomeArtigiano(body: {nomebrand: string}) {
      return this.http.post(this.baseUrl + 'beartigiano', body);
  }


}
