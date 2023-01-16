import React from 'react';
import { createRoot } from 'react-dom/client';

import { config } from '@/config';

import App from './App';
import './index.css';

/**
 * Configuration to start MSW when development mode is enabled
 * This intercepts mocked api requests during development
 */
if (config.mode === 'development') {
  const { worker } = await import('./__msw__/worker');
  worker.start();
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
