import { useState } from 'react';
import { getUser } from 'services/user';

const useUser = (initialUser: User) => {
  const [user, setUser] = useState(initialUser);
  const refetchUser = () => getUser().then((user) => setUser(user));
  return { user, refetchUser };
};

export default useUser;
