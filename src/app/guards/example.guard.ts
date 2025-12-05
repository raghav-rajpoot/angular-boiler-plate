import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

/**
 * ExampleGuard
 * 
 * This is an example route guard demonstrating the guards directory structure.
 * Guards are used to control access to routes based on certain conditions.
 * 
 * Types of Guards:
 * - CanActivate: Controls if a route can be activated
 * - CanActivateChild: Controls if child routes can be activated
 * - CanDeactivate: Controls if a route can be deactivated
 * - CanLoad: Controls if a module can be loaded (lazy loading)
 * - Resolve: Pre-fetches data before route activation
 */
@Injectable({
  providedIn: 'root'
})
export class ExampleGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Example: Check if user is authenticated
    const isAuthenticated = true; // Replace with actual auth check
    
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
      return false;
    }
    
    return true;
  }
}
