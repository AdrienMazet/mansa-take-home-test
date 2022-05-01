import styled from 'styled-components';
import { getFormattedFullName, getInitials } from 'utils/user';
import Avatar from './Avatar';
import Title from './Title';

type UserDetailsProps = {
  user: User;
};

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => (
  <StyledSection>
    <Avatar>{getInitials(user.firstName, user.lastName)}</Avatar>
    <Title title={getFormattedFullName(user.firstName, user.lastName)} />
  </StyledSection>
);

export default UserDetails;
