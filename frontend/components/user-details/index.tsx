import styled from 'styled-components';
import { getFormattedFullName, getInitials } from 'utils/user';
import Avatar from './Avatar';
import Username from './Username';

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
    <Username username={getFormattedFullName(user.firstName, user.lastName)} />
  </StyledSection>
);

export default UserDetails;
