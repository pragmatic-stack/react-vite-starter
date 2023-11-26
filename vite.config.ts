import path from 'path';

import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    outDir: 'build/app',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      exclude: ['./src/__msw__/**/*', './src/__test__/**/*'],
    },
  },
  plugins: [
    tsconfigPaths(),
    eslint({
      ignorePath: '.eslintignore',
      overrideConfigFile: '.eslintrc.cjs',
    }),
    react(),
  ],
});
