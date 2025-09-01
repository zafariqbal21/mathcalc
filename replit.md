# Glass Calculator - Replit Project Guide

## Overview

This is a modern, responsive glass-themed calculator web application built with React, TypeScript, and Express. The project features a beautiful glassmorphism design with smooth animations, keyboard support, and PWA capabilities. It's structured as a full-stack application with a React frontend and Express backend, though the current implementation focuses primarily on the frontend calculator functionality.

The application provides a sleek, mobile-optimized arithmetic calculator with visual feedback, vibration support, and a professional user interface that works seamlessly across devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Framework**: Radix UI primitives with shadcn/ui components for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and glassmorphism effects
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with custom calculator logic in `useCalculator` hook
- **Animations**: Framer Motion for smooth transitions and interactive feedback

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development Server**: Custom Vite integration for seamless development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **API Structure**: RESTful API design with `/api` prefix routing

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: User management schema with username/password authentication
- **Migrations**: Drizzle Kit for database schema management
- **Connection**: Neon Database serverless PostgreSQL (configured but not actively used)

### Build and Deployment
- **Production Build**: Vite for frontend bundling, esbuild for backend compilation
- **Development**: Hot reload with Vite dev server and tsx for backend
- **PWA Features**: Service worker, web manifest, and offline capabilities
- **Asset Management**: Optimized loading with preconnected fonts and lazy loading

### Key Design Patterns
- **Component Composition**: Reusable UI components with proper separation of concerns
- **Custom Hooks**: Business logic abstraction with `useCalculator` for state management
- **Error Boundaries**: Graceful error handling throughout the application
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

### Performance Optimizations
- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Font preloading and image optimization
- **Caching**: Service worker implementation for offline functionality
- **Bundle Analysis**: Tree shaking and minimal bundle size

## External Dependencies

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives for complex components
- **shadcn/ui**: Pre-built component library based on Radix UI
- **tailwindcss**: Utility-first CSS framework with custom design system
- **framer-motion**: Advanced animation library for smooth user interactions
- **class-variance-authority**: Type-safe component variant management
- **clsx & tailwind-merge**: Conditional CSS class utilities

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing solution for React applications
- **react-hook-form**: Performant form handling with minimal re-renders
- **@hookform/resolvers**: Form validation resolver utilities

### Database and Backend
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-zod**: Schema validation integration with Zod
- **express**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express

### Development and Build Tools
- **vite**: Fast build tool with hot module replacement
- **@vitejs/plugin-react**: React support for Vite
- **esbuild**: Fast JavaScript bundler for production
- **typescript**: Static type checking for JavaScript
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit

### Utilities and Enhancements
- **date-fns**: Modern date utility library
- **embla-carousel-react**: Touch-friendly carousel component
- **cmdk**: Command palette implementation
- **nanoid**: Unique ID generation
- **zod**: Runtime type validation and schema definition

### PWA and Mobile Features
- **Service Worker**: Custom implementation for offline functionality
- **Web Manifest**: PWA configuration for app-like experience
- **Vibration API**: Haptic feedback for mobile interactions
- **Responsive Design**: Touch-optimized interface with gesture support