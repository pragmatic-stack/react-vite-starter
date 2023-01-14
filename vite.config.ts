import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    outDir: 'build/app',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.ts',
    coverage: {
      provider: 'istanbul',
    },
  },
  plugins: [
    tsconfigPaths(),
    eslint({ ignorePath: '.eslintignore', overrideConfigFile: '.eslintrc.cjs' }),
    react(),
  ],
});
