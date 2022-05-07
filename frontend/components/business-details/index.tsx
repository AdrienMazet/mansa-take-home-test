import styled from 'styled-components';
import Heading from '../section/Heading';

type BusinessDetailsProps = {
  business: Business;
};

const StyledText = styled.p`
  margin: 10px 0px;
  color: ${({ theme }) => theme.colors.text};
`;

const BusinessDetails: React.FC<BusinessDetailsProps> = ({ business }) => (
  <section>
    <Heading heading="Company" />
    <StyledText>Name: {business.name}</StyledText>
    <StyledText>SIRET: {business.siret}</StyledText>
    <StyledText>Creation: {business.creationDate}</StyledText>
    <StyledText>Address: {business.address}</StyledText>
  </section>
);

export default BusinessDetails;
