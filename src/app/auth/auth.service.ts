import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private router: Router) {}

  isLoggedIn= false;

  apiLogin="http://localhost:8080/rest/home/login";


  isAuthenticated(){
    return this.isLoggedIn
  }


  login(body:any):Observable<any>{
    
    this.router.navigate(["/closet"]);
    
    return this.http.post<any>(this.apiLogin,body);
    
  }


  hello(){
    const token=localStorage.getItem("TKN");

    let headers = new HttpHeaders();
    headers=headers.set("Authorization","Bearer "+ token);

    return this.http.get<any>('http://localhost:8080/admin',{headers:headers})
  }


}
