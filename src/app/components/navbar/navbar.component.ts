import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  title = 'our-closet-gui';
  lightMode = false;

  variabile=false;

  ngOnInit(){

  }


  switchTheme() {
    const body= document.body as HTMLElement
    if(!this.lightMode) {
      body.setAttribute('data-bs-theme', 'light');
      this.lightMode = true;
    } else {
      body.setAttribute('data-bs-theme', 'dark');
      this.lightMode = false;
    }
  }
}
