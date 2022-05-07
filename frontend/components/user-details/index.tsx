import useUser from 'hooks/useUser';
import styled from 'styled-components';
import { getFormattedFullName, getInitials } from 'utils/user';
import Avatar from './Avatar';
import Username from './Username';

type UserDetailsProps = {
  user: User;
};

const Section = styled.section`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

const UserDetails: React.FC<UserDetailsProps> = ({ user: initialUser }) => {
  const { user, refetchUser } = useUser(initialUser);
  return (
    <Section>
      <Avatar>{getInitials(user.firstName, user.lastName)}</Avatar>
      <Username
        username={getFormattedFullName(user.firstName, user.lastName)}
      />
      <button onClick={refetchUser}>Refetch user</button>
    </Section>
  );
};

export default UserDetails;
