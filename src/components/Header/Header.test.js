import Header from './Header';
import React from 'react';
import { render } from '@testing-library/react';

describe('Testing the component elements', () => {
  test('Component is rendered', () => {
    const { getByText, getByRole } = render(<Header />);
    getByText('Menu');
    getByRole('textbox');
  });
});
