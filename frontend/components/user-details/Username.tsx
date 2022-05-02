import styled from 'styled-components';

type UsernameProps = {
  username: string;
};

const StyledHeading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

const Username: React.FC<UsernameProps> = ({ username }) => (
  <StyledHeading data-cy="Username">{username}</StyledHeading>
);

export default Username;
