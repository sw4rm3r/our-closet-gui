import { Routes } from '@angular/router';
import {ClosetComponent} from "./pages/closet/closet.component";
import {HomeComponent} from "./pages/home/home.component";
import {ArtigianoComponent} from "./pages/artigiano/artigiano.component";
import { LoginComponent } from './pages/login/login.component';
import { adminGuard } from './auth/admin.guard';
import {LayoutComponent} from "./pages/layout/layout.component";


export const routes: Routes = [
  { path: '', title:"OurCloset - Home", component: LoginComponent },
  { path: 'login', title:"OurCloset - Login", component: LoginComponent },
  { path: 'app', title:"OurCloset - Home", component: LayoutComponent,
    children: [
      { path: 'home', title:"OurCloset - Home", component: HomeComponent },
      { path: 'closet', title:"OurCloset - Armadio", component: ClosetComponent ,/*canActivate:[adminGuard]*/},
      { path: 'manufacturer', title:"OurCloset - Artigiano", component: ArtigianoComponent },
    ]
  }
];
