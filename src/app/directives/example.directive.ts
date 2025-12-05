import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

/**
 * ExampleDirective
 * 
 * This is an example directive demonstrating the directives directory structure.
 * Directives are used to add behavior to DOM elements.
 * 
 * Types of Directives:
 * - Component Directives: Components with templates
 * - Structural Directives: Modify DOM structure (*ngIf, *ngFor)
 * - Attribute Directives: Modify element appearance/behavior
 */
@Directive({
  selector: '[appExample]'
})
export class ExampleDirective implements OnInit {
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    // Example: Add a class to the element
    this.renderer.addClass(this.el.nativeElement, 'example-directive');
  }
}
