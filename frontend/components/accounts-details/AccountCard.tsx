import styled from 'styled-components';

type AccountCardProps = {
  account: Account;
};

const Card = styled.div`
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.accountCardBackground};
  border: 1px solid ${({ theme }) => theme.colors.accountCardBorder};
  border-radius: 5px;
`;

const CardContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Text = styled.p`
  margin: 5px 5px;
  color: ${({ theme }) => theme.colors.accountCardText};
`;

const StrongText = styled(Text)`
  font-weight: bold;
`;

const AccountCard: React.FC<AccountCardProps> = ({ account }) => (
  <Card>
    <CardContent>
      <StrongText>Account number:</StrongText>
      <StrongText>{account.account_number}</StrongText>
    </CardContent>
    <CardContent>
      <Text>Balance:</Text>
      <Text>{`${account.available} ${account.currency}`}</Text>
    </CardContent>
  </Card>
);

export default AccountCard;
