import styled from 'styled-components';

type SectionHeadingProps = {
  heading: string;
};

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.text};
`;

const SectionHeading: React.FC<SectionHeadingProps> = ({ heading }) => (
  <Heading>{heading}</Heading>
);

export default SectionHeading;
