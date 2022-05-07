import styled from 'styled-components';

type BusinessDetailsProps = {
  business: Business;
};

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`;

const StyledText = styled.p`
  margin: 10px 0px;
  color: ${({ theme }) => theme.colors.text};
`;

const BusinessDetails: React.FC<BusinessDetailsProps> = ({ business }) => (
  <section>
    <StyledHeading>Company</StyledHeading>
    <StyledText>Name: {business.name}</StyledText>
    <StyledText>SIRET: {business.siret}</StyledText>
    <StyledText>Creation: {business.creationDate}</StyledText>
    <StyledText>Address: {business.address}</StyledText>
  </section>
);

export default BusinessDetails;
