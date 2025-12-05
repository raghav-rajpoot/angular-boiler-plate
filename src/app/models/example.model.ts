/**
 * ExampleModel
 * 
 * This is an example model/interface demonstrating the models directory structure.
 * Models define the shape of data used throughout the application.
 * 
 * Best Practices:
 * - Use interfaces for object shapes
 * - Use classes when you need methods or constructors
 * - Keep models simple and focused
 * - Export models that are used across multiple modules
 */

export interface ExampleModel {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
}

export class ExampleClass {
  constructor(
    public id: number,
    public name: string
  ) {}

  getDisplayName(): string {
    return `${this.id}: ${this.name}`;
  }
}
