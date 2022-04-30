import { render, screen } from '../../test-utils';
import Header from './Header';

describe('Header', () => {
  beforeEach(() => render(<Header />));
  it('renders a header', () => {
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  it('renders Mansa logo', () => {
    const logo = screen.getByAltText('Logo de Mansa');
    expect(logo).toBeInTheDocument();
  });
});
