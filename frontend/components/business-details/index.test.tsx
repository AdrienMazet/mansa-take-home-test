import BusinessDetails from '.';
import { render, screen } from '../../test-utils';

const myBusiness: Business = {
  siret: 48488345900014,
  name: 'RANDOM',
  creationDate: '30-06-2005',
  address: '12 RUE JULES VERNE 44700 ORVAULT',
};

describe('BusinessDetails', () => {
  beforeEach(() => render(<BusinessDetails business={myBusiness} />));
  it('renders section name in a heading', () => {
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Company');
  });
  it('renders business details', () => {
    const name = screen.getByText(`Name: ${myBusiness.name}`);
    expect(name).toBeInTheDocument();
    const siret = screen.getByText(`SIRET: ${myBusiness.siret}`);
    expect(siret).toBeInTheDocument();
    const creationDate = screen.getByText(
      `Creation: ${myBusiness.creationDate}`,
    );
    expect(creationDate).toBeInTheDocument();
    const address = screen.getByText(`Address: ${myBusiness.address}`);
    expect(address).toBeInTheDocument();
  });
});
