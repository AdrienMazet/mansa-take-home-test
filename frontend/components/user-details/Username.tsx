import styled from 'styled-components';

type UsernameProps = {
  username: string;
};

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`;

const Username: React.FC<UsernameProps> = ({ username }) => (
  <Heading data-cy="Username">{username}</Heading>
);

export default Username;
