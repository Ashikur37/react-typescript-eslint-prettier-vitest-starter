import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';
import SIgnupForm from './components/SIgnupForm';

describe('App', () => {
  it('should render input', () => {
    render(<SIgnupForm />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  // it('Renders hello world', () => {
  //   // ARRANGE
  //   render(<WrappedApp />);
  //   // ACT
  //   // EXPECT
  //   expect(
  //     screen.getByRole('heading', {
  //       level: 1,
  //     })
  //   ).toHaveTextContent('Hello World');
  // });
  // it('renders not found on path change', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/s']}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(
  //     screen.getByRole('heading', {
  //       level: 1,
  //     })
  //   ).toHaveTextContent('NotFound');
  // });
});
