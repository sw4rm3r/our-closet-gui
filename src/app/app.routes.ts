import { Routes } from '@angular/router';
import {ClosetComponent} from "./pages/closet/closet.component";
import {HomeComponent} from "./pages/home/home.component";
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'closet', title:"OurCloset - Armadio", component: ClosetComponent },
  { path: 'home',title:"OurCloset - Home", component: HomeComponent },
  { path: '', title:"OurCloset - Home", component: HomeComponent },
  { path: 'login', title:"OurCloset - Login", component: LoginComponent },

];
