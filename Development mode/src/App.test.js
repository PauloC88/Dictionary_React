import { render, screen } from '@testing-library/react';
import Dictionary from './App';

test('renders learn react link', () => {
  render(<Dictionary />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});