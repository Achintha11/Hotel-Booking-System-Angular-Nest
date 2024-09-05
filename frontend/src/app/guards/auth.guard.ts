import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = localStorage.getItem('accessToken');

    if (token) {
      return true; // User is authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to the login page
      return false;
    }
  }
}
