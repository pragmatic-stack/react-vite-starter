# React Vite starter
![Known Vulnerabilities](https://snyk.io/test/github/pragmatic-stack/react-vite-starter/badge.svg)

A modern stack to kick off react 18 apps fast.

## ToDo | Roadmap

- Swagger codegen setup and wiring
- Mock Service Worker setup and workflow
  - MSW Data mocking for tests
  - MSW Data mocking for development
  - MSW Storybook
- Axios client setup
- React Query setup and integration
- Storybook setup and feature stories
- Dockerfiles
  - App
  - Storybook
- Plop generators
  - Storybook component
  - React component
  - MSW endpoint
  - Feature generator

## Done

- Pnpm package management
- Vite bundler base setup
- Eslint setup
  - add base setup and useful eslint plugins
- Tailwind configuration and base setup
- Vitest setup and testing-library integration
- Storybook setup
- Build configuration for app and storybook
- Snyk vulnerablility scans
- Husky integration
  - commit-message
  - pre-commit hook

## Testing - Vitest

To run tests for that project we use vitest as test runner.
Learn more about the tool here: [Vitest](https://vitest.dev/)

### Scripts
- `pnpm test` - run tests with vitest
- `pnpm test:coverage` run tests with istanbul coverage provider