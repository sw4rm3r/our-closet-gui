import { Routes } from '@angular/router';
import {ClosetComponent} from "./pages/closet/closet.component";
import {HomeComponent} from "./pages/home/home.component";
import {ArtigianoComponent} from "./pages/artigiano/artigiano.component";
import { LoginComponent } from './pages/login/login.component';
import { adminGuard } from './auth/admin.guard';


export const routes: Routes = [
  { path: 'closet', title:"OurCloset - Armadio", component: ClosetComponent ,canActivate:[adminGuard]},
  { path: 'home',title:"OurCloset - Home", component: HomeComponent },
  { path: '', title:"OurCloset - Home", component: HomeComponent },
  { path: 'manufacturer', title:"OurCloset - Artigiano", component: ArtigianoComponent },
  { path: 'login', title:"OurCloset - Login", component: LoginComponent },



];
