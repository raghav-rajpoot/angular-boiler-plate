import { Pipe, PipeTransform } from '@angular/core';

/**
 * ExamplePipe
 * 
 * This is an example pipe demonstrating the pipes directory structure.
 * Pipes are used to transform data in templates.
 * 
 * Built-in Pipes:
 * - DatePipe, CurrencyPipe, DecimalPipe, PercentPipe
 * - UpperCasePipe, LowerCasePipe, TitleCasePipe
 * - JsonPipe, SlicePipe, AsyncPipe
 * 
 * Custom Pipes:
 * - Create your own transformation logic
 * - Can be pure (default) or impure
 */
@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {
  
  transform(value: string, ...args: any[]): string {
    if (!value) {
      return '';
    }
    
    // Example: Transform the value
    return value.toUpperCase();
  }
}
