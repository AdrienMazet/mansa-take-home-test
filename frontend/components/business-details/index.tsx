import styled from 'styled-components';
import SectionHeading from '../section/SectionHeading';

type BusinessDetailsProps = {
  business: Business;
};

const Text = styled.p`
  margin: 10px 0px;
  color: ${({ theme }) => theme.colors.text};
`;

const BusinessDetails: React.FC<BusinessDetailsProps> = ({ business }) => (
  <section>
    <SectionHeading heading="Company" />
    <Text>Name: {business.name}</Text>
    <Text>SIRET: {business.siret}</Text>
    <Text>Creation: {business.creationDate}</Text>
    <Text>Address: {business.address}</Text>
  </section>
);

export default BusinessDetails;
