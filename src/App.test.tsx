import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';

import App from './App';

describe('App', () => {
  it('should work as expected', () => {
    render(<App />);

    expect(screen.getByText('App')).toBeInTheDocument();
  });

  it('should fetch todos', async () => {
    const todos = await fetch('https://localhost:3000/todos').then((data) => data.json());

    expect(todos.data).toHaveLength(0);
  });
});

export {};
