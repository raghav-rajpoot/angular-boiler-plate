import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * ExampleInterceptor
 * 
 * This is an example HTTP interceptor demonstrating the interceptors directory structure.
 * Interceptors are used to modify HTTP requests and responses globally.
 * 
 * Common Use Cases:
 * - Adding authentication headers
 * - Logging HTTP requests
 * - Error handling
 * - Request/response transformation
 * - Loading indicators
 */
@Injectable()
export class ExampleInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Example: Add authorization header
    const authToken = 'your-auth-token'; // Replace with actual token retrieval
    
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    
    return next.handle(authReq);
  }
}
