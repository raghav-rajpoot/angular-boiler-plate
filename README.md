# Angular Boilerplate Project

A comprehensive Angular boilerplate project that demonstrates the standard structure and organization of an Angular application. This project serves as a learning resource and starting point for new Angular projects.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Directory Explanations](#directory-explanations)
- [Key Concepts](#key-concepts)
- [Best Practices](#best-practices)
- [Scripts](#scripts)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn
- Angular CLI (v17 or higher)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## 📁 Project Structure

```
angular-boilerplate/
├── src/                          # Source files
│   ├── app/                      # Application code
│   │   ├── components/           # Feature components
│   │   ├── shared/               # Shared module
│   │   ├── services/             # Services (business logic, HTTP)
│   │   ├── models/               # Data models and interfaces
│   │   ├── guards/               # Route guards
│   │   ├── interceptors/         # HTTP interceptors
│   │   ├── directives/           # Custom directives
│   │   ├── pipes/                # Custom pipes
│   │   ├── app.component.*       # Root component
│   │   ├── app.module.ts         # Root module
│   │   └── app-routing.module.ts # Root routing configuration
│   ├── assets/                   # Static assets (images, fonts, etc.)
│   ├── environments/             # Environment configurations
│   ├── index.html                # Main HTML file
│   ├── main.ts                   # Application entry point
│   └── styles.css                # Global styles
├── .gitignore                    # Git ignore rules
├── angular.json                  # Angular CLI configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # TypeScript config for app
└── tsconfig.spec.json            # TypeScript config for tests
```

## 📂 Directory Explanations

### `/src/app` - Application Root

The main application code lives here. This is where all your Angular components, services, and modules are organized.

#### `/src/app/components/` - Feature Components

**Purpose**: Contains feature-specific components that represent distinct features or pages of your application.

**Structure**:
```
components/
├── home/
│   ├── home.component.ts
│   ├── home.component.html
│   └── home.component.css
└── [feature-name]/
    ├── [feature].component.ts
    ├── [feature].component.html
    └── [feature].component.css
```

**Best Practices**:
- Each component should be in its own folder
- Component files should be named with the component name (e.g., `home.component.ts`)
- Keep components focused on a single responsibility
- Use feature modules to group related components

#### `/src/app/shared/` - Shared Module

**Purpose**: Contains components, directives, and pipes that are used across multiple feature modules.

**Contents**:
- `shared.module.ts` - Module that exports shared resources
- Shared components (e.g., header, footer, loading spinner)
- Shared directives
- Shared pipes

**Best Practices**:
- Only include resources used in multiple modules
- Export CommonModule so importing modules don't need to import it separately
- Avoid importing SharedModule in AppModule if only used in feature modules

#### `/src/app/services/` - Services

**Purpose**: Contains services that handle business logic, data fetching, and cross-component communication.

**Common Use Cases**:
- HTTP API calls
- State management
- Authentication
- Data transformation
- Utility functions

**Example Structure**:
```
services/
├── api.service.ts          # HTTP service
├── auth.service.ts         # Authentication service
├── data.service.ts         # Data management
└── utility.service.ts      # Helper functions
```

**Best Practices**:
- Use `providedIn: 'root'` for singleton services
- Keep services focused on a single responsibility
- Use dependency injection
- Handle errors appropriately

#### `/src/app/models/` - Data Models

**Purpose**: Contains TypeScript interfaces, classes, and types that define the shape of data used throughout the application.

**Example Structure**:
```
models/
├── user.model.ts           # User interface/class
├── product.model.ts        # Product interface/class
└── api-response.model.ts   # API response types
```

**Best Practices**:
- Use interfaces for object shapes
- Use classes when you need methods or constructors
- Keep models simple and focused
- Export models that are used across multiple modules

#### `/src/app/guards/` - Route Guards

**Purpose**: Contains route guards that control access to routes based on certain conditions.

**Types of Guards**:
- **CanActivate**: Controls if a route can be activated
- **CanActivateChild**: Controls if child routes can be activated
- **CanDeactivate**: Controls if a route can be deactivated (e.g., unsaved changes)
- **CanLoad**: Controls if a lazy-loaded module can be loaded
- **Resolve**: Pre-fetches data before route activation

**Example Use Cases**:
- Authentication checks
- Authorization (role-based access)
- Unsaved changes warnings
- Data pre-loading

#### `/src/app/interceptors/` - HTTP Interceptors

**Purpose**: Contains HTTP interceptors that modify HTTP requests and responses globally.

**Common Use Cases**:
- Adding authentication headers to all requests
- Logging HTTP requests/responses
- Global error handling
- Request/response transformation
- Loading indicators
- Retry logic

**Best Practices**:
- Register interceptors in `app.module.ts` or use `providedIn: 'root'`
- Handle errors appropriately
- Don't modify the original request/response objects

#### `/src/app/directives/` - Custom Directives

**Purpose**: Contains custom directives that add behavior to DOM elements.

**Types of Directives**:
- **Component Directives**: Components with templates
- **Structural Directives**: Modify DOM structure (e.g., `*ngIf`, `*ngFor`)
- **Attribute Directives**: Modify element appearance/behavior

**Example Use Cases**:
- Custom validation
- DOM manipulation
- Event handling
- Styling

#### `/src/app/pipes/` - Custom Pipes

**Purpose**: Contains custom pipes that transform data in templates.

**Built-in Pipes**:
- `DatePipe`, `CurrencyPipe`, `DecimalPipe`, `PercentPipe`
- `UpperCasePipe`, `LowerCasePipe`, `TitleCasePipe`
- `JsonPipe`, `SlicePipe`, `AsyncPipe`

**Best Practices**:
- Keep pipes pure (default) when possible for better performance
- Use impure pipes only when necessary
- Handle null/undefined values

### `/src/assets/` - Static Assets

**Purpose**: Contains static files that are copied to the output directory as-is.

**Contents**:
- Images (`.png`, `.jpg`, `.svg`, etc.)
- Fonts
- JSON configuration files
- Other static resources

**Usage in Templates**:
```html
<img src="assets/images/logo.png" alt="Logo">
```

### `/src/environments/` - Environment Configuration

**Purpose**: Contains environment-specific configuration files.

**Files**:
- `environment.ts` - Development environment
- `environment.prod.ts` - Production environment

**Usage**:
```typescript
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;
```

### Root Configuration Files

#### `angular.json`
Angular CLI configuration file that defines:
- Project structure
- Build configurations
- Serve options
- Test setup
- Asset paths
- Style and script includes

#### `package.json`
Node.js package configuration that includes:
- Project metadata
- Dependencies
- Dev dependencies
- NPM scripts

#### `tsconfig.json`
TypeScript compiler configuration that defines:
- Compilation options
- Module resolution
- Type checking rules
- Output settings

#### `tsconfig.app.json` & `tsconfig.spec.json`
Extended TypeScript configurations for:
- Application code (`tsconfig.app.json`)
- Test files (`tsconfig.spec.json`)

## 🔑 Key Concepts

### Modules

Angular applications are modular. The root module (`app.module.ts`) bootstraps the application and imports other modules.

**Feature Modules**: Organize related components, services, and routes together.

**Shared Module**: Contains resources used across multiple feature modules.

### Components

Components are the building blocks of Angular applications. Each component consists of:
- **TypeScript class** (`.ts`) - Component logic
- **Template** (`.html`) - Component view
- **Styles** (`.css`) - Component styles

### Services

Services are injectable classes that provide functionality across the application. They're typically used for:
- Data fetching
- Business logic
- State management
- Cross-component communication

### Dependency Injection

Angular's dependency injection system provides services to components and other services. Use constructor injection:

```typescript
constructor(private myService: MyService) { }
```

### Routing

Angular Router enables navigation between views. Routes are defined in `app-routing.module.ts` and can include:
- Route paths
- Components
- Route guards
- Route data
- Lazy loading

## ✅ Best Practices

### Organization

1. **Feature-based structure**: Group related components, services, and models together
2. **Lazy loading**: Load feature modules on demand to improve initial load time
3. **Barrel exports**: Use `index.ts` files to simplify imports
4. **Naming conventions**: Use consistent naming (kebab-case for files, PascalCase for classes)

### Code Quality

1. **TypeScript strict mode**: Enable strict type checking
2. **OnPush change detection**: Use for better performance
3. **Lazy loading**: Load modules on demand
4. **Tree shaking**: Remove unused code
5. **AOT compilation**: Compile ahead of time for production

### Performance

1. **Lazy loading modules**: Reduce initial bundle size
2. **OnPush change detection**: Reduce change detection cycles
3. **TrackBy functions**: Optimize `*ngFor` loops
4. **Unsubscribe**: Prevent memory leaks from observables
5. **Image optimization**: Compress and use appropriate formats

### Security

1. **Sanitize inputs**: Prevent XSS attacks
2. **Validate data**: Validate on both client and server
3. **HTTPS**: Use secure connections in production
4. **Authentication**: Implement proper auth guards
5. **Authorization**: Check permissions before actions

## 📜 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run linting

## 📚 Additional Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Angular CLI](https://angular.io/cli)
- [RxJS Documentation](https://rxjs.dev/)

## 🤝 Contributing

This is a boilerplate project. Feel free to customize it for your needs!

## 📄 License

This project is open source and available for educational purposes.

---

**Happy Coding! 🎉**
