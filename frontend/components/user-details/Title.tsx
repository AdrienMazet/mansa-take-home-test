import styled from 'styled-components';

type TitleProps = {
  title: string;
};

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

const Title: React.FC<TitleProps> = ({ title }) => (
  <StyledTitle>{title}</StyledTitle>
);

export default Title;
