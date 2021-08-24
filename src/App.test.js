import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'


test('Navbar test: Title Dictionary test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vocabulary/i);
  expect(linkElement).toBeInTheDocument();
});

