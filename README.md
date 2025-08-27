# Candour IT Services Assessment

A assessment project built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.  
The app allows you to search GitHub users, view their profile details, and see their latest repositories.



## 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind

## 📦 Installation

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your machine.

```bash
# Clone the repository
git clone https://github.com/TechieSamDev/candouritservices-assessment.git
cd candouritservices-assessment

# Install dependencies with your preferred package manager
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## 🏗️ Build

To build the application for production:

```bash
# Create production build
npm run build
# or
yarn build
# or
pnpm build
# or
bun run build

# Start production server
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 📁 Folder Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js 15 App Router pages
│   ├── components/        # Reusable UI components
│   │   └── ui/           # shadcn/ui components
│   ├── lib/              # Utility functions and configurations
│   ├── hooks/            # Custom React hooks
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server |
| `build` | Build for production |
| `start` | Start production server |
| `lint` | Run ESLint |

> **Note:** Replace the package manager prefix (`npm run`, `yarn`, `pnpm`, `bun run`) with your preferred choice.

## 🎨 Adding Components

To add new shadcn/ui components:

```bash
# Add a specific component
npx shadcn@latest add button
# or with other package managers
yarn dlx shadcn@latest add button
pnpx shadcn@latest add button
bunx shadcn@latest add button

# Add multiple components
npx shadcn@latest add button card dialog
```
