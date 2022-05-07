export const getAccounts = async () => {
  const res = await fetch('https://kata.getmansa.tech/accounts');
  const data = await res.json();
  return data as Account[];
};
