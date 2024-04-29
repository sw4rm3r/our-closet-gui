import { Component, Inject } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, RouterOutlet, RouterLink, RouterLinkActive,],
 
templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private AuthService:AuthService,@Inject(DOCUMENT) private document: Document,private router: Router){}

  ngOnInit(){
    const localStorage = document.defaultView?.localStorage;
    const token=localStorage?.getItem("TKN");
    if(token){
      this.AuthService.hello().subscribe((response)=>{
        this.AuthService.isLoggedIn=true;
        this.router.navigate(["/closet"]);
        console.log(response);
      },(error)=>{
        if(error){
          this.AuthService.isLoggedIn=false;
          console.log(error);

        }
      }
    )

    }





  }

  


}
