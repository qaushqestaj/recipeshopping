import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.authService.user.pipe(
      map((user) => {
        return !!user;
      })
    );
  }
}
