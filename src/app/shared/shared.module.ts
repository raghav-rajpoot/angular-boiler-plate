import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * SharedModule
 * 
 * This module contains components, directives, and pipes that are used
 * across multiple feature modules. It should be imported by feature modules
 * that need to use these shared resources.
 * 
 * Best Practices:
 * - Only include components/directives/pipes that are used in multiple modules
 * - Do NOT import SharedModule in AppModule if it's only used in feature modules
 * - Export CommonModule so importing modules don't need to import it separately
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
