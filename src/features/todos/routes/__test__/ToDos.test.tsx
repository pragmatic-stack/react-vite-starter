import { screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

import { renderTest } from '@/__tests__/renderTest';

describe('Todos Route', () => {
  it('should render successfully', async () => {
    renderTest({ currentUrl: '/todos' });

    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(await screen.findByText('0')).toBeInTheDocument();
  });
});
