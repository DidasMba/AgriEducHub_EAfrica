// Import necessary functions from the testing library and the App component
import { render, screen } from '@testing-library/react';
import App from './App';

// Test case: renders learn react link
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Get the link element containing the text 'learn react'
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the link element is present in the document
  expect(linkElement).toBeInTheDocument();
});

