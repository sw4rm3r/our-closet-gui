import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  isLoggedIn= true;

  apiLogin="http://localhost:8080/rest/home/login";


  isAuthenticated(){
    return this.isLoggedIn
  }


  login(body:any):Observable<any>{

    

    return this.http.post<any>(this.apiLogin,body);

  }



}
