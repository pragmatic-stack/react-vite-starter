import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import App from './App';

describe('App', () => {
  it('should work as expected', () => {
    render(<App />);

    expect(screen.getByText('App')).toBeInTheDocument();
  });
});

export {};
