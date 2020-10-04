import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// default test created in create react app 
test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
