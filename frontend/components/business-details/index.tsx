import styled from 'styled-components';

type BusinessDetailsProps = {
  business: Business;
};

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`;

const BusinessDetails: React.FC<BusinessDetailsProps> = ({ business }) => (
  <StyledHeading>Company</StyledHeading>
);

export default BusinessDetails;
