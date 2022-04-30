import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders a header', () => {
    render(<Header />)
    const header = screen.getByRole("banner")
    expect(header).toBeInTheDocument()
  })
  it('renders Mansa logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Logo de Mansa');
    expect(logo).toBeInTheDocument();
  });
});
