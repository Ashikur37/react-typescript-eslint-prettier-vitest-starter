import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('testing card', () => {
  test('find the div', () => {
    render(<Card />);
    const cardElement = screen.queryByText(/Card/i);
    expect(cardElement).toBeInTheDocument();
  });
});
