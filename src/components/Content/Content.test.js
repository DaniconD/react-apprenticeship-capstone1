import Content from "./Content";
import React from "react";
import { render } from '@testing-library/react';

describe('Testing the component elements', () => {
    test('Component is rendered', () => {
        const { getByText } = render(<Content />);
          const title = getByText('Capstone Project 1');
          expect(title).toBeInTheDocument();
        });
  });