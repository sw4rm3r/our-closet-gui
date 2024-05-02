import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import {Router} from "@angular/router";



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  serverError: string = "";


  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(form: NgForm) {

    const body = {
      "username": form.value.username,
      "password": form.value.password
    }

    this.authService.login(body).subscribe((response) => {
      console.log(response)

      this.authService.isLoggedIn = true;
      this.router.navigate(["/app/closet"]);
      localStorage.setItem("TKN", response.token);

    })

    console.log(form.value.password, form.value.username)

  }

}
