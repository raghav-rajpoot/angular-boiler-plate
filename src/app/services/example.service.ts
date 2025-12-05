import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * ExampleService
 * 
 * This is an example service demonstrating the services directory structure.
 * Services are typically used for:
 * - Data fetching (HTTP calls)
 * - Business logic
 * - State management
 * - Cross-component communication
 * 
 * Services are injectable and can be provided at different levels:
 * - Root level (providedIn: 'root') - Singleton across the app
 * - Module level - Instance per module
 * - Component level - Instance per component
 */
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  
  constructor() { }

  /**
   * Example method demonstrating service functionality
   */
  getData(): Observable<string> {
    return of('Example data from service');
  }
}
