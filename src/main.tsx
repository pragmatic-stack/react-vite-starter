import React from 'react';
import { createRoot } from 'react-dom/client';

import { config } from '@/config';

import App from './App';
import './index.css';

/**
 * Configuration to start MSW when development mode is enabled
 * This intercepts mocked api requests during development
 */
async function enableMocking() {
  if (config.mode !== 'development') {
    return;
  }

  const { worker } = await import('./__msw__/worker');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
