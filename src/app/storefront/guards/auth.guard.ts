import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/core/service/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   * Guard to check the login info of the customer
   */
  constructor(
    private readonly router: Router,
    private loginService: LoginService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.loginService.isLoggedIn.subscribe((value) => {
      if (!value) {
        this.router.navigateByUrl('/login');
      }
    });
    return this.loginService.isLoggedIn;
  }
}
