# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Walk By Faith Ministry website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build production bundle with Turbopack
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## Architecture

### Next.js App Router Structure
- Uses Next.js 15 App Router in `src/app/`
- Root layout: `src/app/layout.tsx` - Defines metadata and font configuration
- Main page: `src/app/page.tsx` - Coming soon landing page with countdown timer

### Key Configurations
- **TypeScript**: Strict mode enabled with path alias `@/*` → `./src/*`
- **Tailwind CSS 4**: PostCSS-based configuration
- **ESLint**: Configured with Next.js defaults and Prettier integration
- **Prettier**: Sorts imports using `@trivago/prettier-plugin-sort-imports` and Tailwind classes
- **Images**: Remote patterns configured for `images.unsplash.com`
- **Type-safe routing**: `typedRoutes: true` in Next.js config

### Git Hooks (Husky)
- **Pre-commit**: Runs `npm run format` and `npm run lint`
- **Commit-msg**: Validates commit messages with commitlint (conventional commits)

### VS Code Integration
- Format on save enabled
- ESLint auto-fix on save
- Custom labels for page.tsx and layout.tsx files in editor tabs