export const getUser = async () => {
  const res = await fetch(`https://randomuser.me/api`);
  const data = await res.json();
  const { first, last } = data.results[0].name;
  return { firstName: first, lastName: last } as User;
};
