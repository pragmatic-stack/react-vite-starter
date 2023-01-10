import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    eslint({ ignorePath: '.eslintignore', overrideConfigFile: '.eslintrc.cjs' }),
    react(),
  ],
});
