import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'our-closet-gui';
  lightMode = false;
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
