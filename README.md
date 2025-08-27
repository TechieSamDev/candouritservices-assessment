# Candour IT Services Assessment

A small assessment project built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
The app allows you to search GitHub users, view their profile details, and see their latest repositories.


## 🚀 Tech Stack

- **[Next.js 14](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Simple and complete testing utilities

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and [pnpm](https://pnpm.io/) installed on your machine.

```bash
# Clone the repository
git clone https://github.com/TechieSamDev/candouritservices-assessment.git
cd candouritservices-assessment

# Install dependencies
pnpm install
```

## 🛠️ Development

Start the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🏗️ Build

To build the application for production:

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## 🧪 Testing

This project uses Vitest and React Testing Library for testing.

### Running Tests

```bash
# Run tests once
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests in UI mode
pnpm test:ui
```

### Test Configuration

The testing setup includes:
- **Vitest** for fast unit and integration testing
- **React Testing Library** for component testing
- **jsdom** environment for DOM simulation
- **@testing-library/jest-dom** for additional matchers

Test files are placed alongside in a `__tests__` directory.

## 📁 Folder Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js 15 App Router pages
│   ├── components/        # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions and configurations
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── styles/           # Global styles and Tailwind config
├── tests/                 # Test utilities and setup
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vitest.config.ts      # Vitest configuration
└── package.json          # Project dependencies and scripts
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm test` | Run tests |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm test:coverage` | Run tests with coverage |
| `pnpm test:ui` | Run tests with UI |
| `pnpm type-check` | Run TypeScript compiler check |

## 🎨 Adding Components

To add new shadcn/ui components:

```bash
# Add a specific component
pnpx shadcn-ui@latest add button

# Add multiple components
pnpx shadcn-ui@latest add button card dialog
```
