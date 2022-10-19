import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders coffee homepage', () => {
  render(<App />);
  const greeting = screen.getByTitle(/Hello from Coffee To Go/i);
  expect(greeting).toBeInTheDocument();
});
