import styled from 'styled-components';

type HeadingProps = {
  heading: string;
};

const StyledHeading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`;

const Heading: React.FC<HeadingProps> = ({ heading }) => (
  <StyledHeading>{heading}</StyledHeading>
);

export default Heading;
