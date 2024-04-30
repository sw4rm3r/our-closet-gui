import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

class AdminPermission {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    const localStorage = document.defaultView?.localStorage;
    const token = localStorage?.getItem("TKN");


    if (token) {
      this.authService.hello().subscribe((response) => {
        return true;

      }, (error) => {
        this.router.navigate(['/login']);
        return false;
      }
      )


    } else {
      this.router.navigate(['/login']);
      return false;
    }


  }




}


export const adminGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AdminPermission).canActivate(next, state);
}
