# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm install` - Install all dependencies for the monorepo
- `npm run watch:lib` - Build the UI library in watch mode (essential for development)
- `npm run start:expo` - Start the Expo development server for the example app
- `npm run build:lib` - Build the UI library for production

### Code Quality

- `npm run lint` - Lint all TypeScript/JavaScript files
- `npm run lint:fix` - Auto-fix linting issues
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run both linting and type checking (no unit tests configured)
- `npm run format` - Format all files with Prettier
- `npm run format:check` - Check if files are properly formatted

### Publishing

- `npm run publish:lib` - Publish the UI library to npm (includes build, prepare, publish, restore steps)
- `npm run release` - Create an automated release using conventional commits
- `npm run release:patch/minor/major` - Create specific version releases
- `npm run release:dry-run` - Test release process without making changes

## Architecture

### Monorepo Structure

This is a npm workspaces monorepo with two main areas:

- `packages/ui-components/` - The `@leogouveia/gds-library` UI component library
- `apps/` - Contains example applications and Storybook setups

### UI Component Library (`packages/ui-components/`)

- **Framework**: React Native with Tamagui for styling and theming
- **Build Tool**: React Native Builder Bob for multi-format builds (CommonJS, ES Modules, TypeScript declarations)
- **Entry Point**: `src/index.ts` exports all components and configuration
- **Main Components**: Button and Input components
- **Configuration**: Tamagui config and provider in `src/config/`

### Key Files

- `packages/ui-components/src/index.ts` - Main export file for the library
- `packages/ui-components/src/config/tamagui.config.ts` - Tamagui theme and styling configuration
- `packages/ui-components/src/config/TamaguiProvider.tsx` - Provider wrapper (exported as DSCProvider)

### Development Workflow

1. Always run `npm run watch:lib` when developing - this builds the library in watch mode
2. Use the example app (`npm run start:expo`) to test components
3. Follow conventional commit format - enforced by commitlint
4. Pre-commit hooks run linting, formatting, and type checking automatically

### TypeScript Configuration

- Strict TypeScript configuration with comprehensive type checking enabled
- Path mapping: `@leogouveia/gds-library` maps to `packages/ui-components/src`
- React Native JSX transform configured

### Quality Tools

- **ESLint**: TypeScript + Prettier integration, allows unused vars with `_` prefix
- **Prettier**: Enforced formatting on commit
- **Husky + lint-staged**: Pre-commit hooks for code quality
- **Commitlint**: Enforces conventional commit messages

### Component Development

- Create components in `packages/ui-components/src/components/`
- Export from `packages/ui-components/src/index.ts`
- Use Tamagui for styling and theming
- Test in the example app before publishing

### Publishing Process

The library uses a sophisticated publishing workflow:

1. `prepare-publish.js` modifies package.json for production
2. Builds the library with React Native Builder Bob
3. Publishes to npm
4. `restore-dev.js` restores development configuration
