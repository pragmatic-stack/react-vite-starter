import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('should work as expected', () => {
    render(<App />);

    screen.debug();

    expect(1 + 1).toBe(2);
  });
});

export {};
