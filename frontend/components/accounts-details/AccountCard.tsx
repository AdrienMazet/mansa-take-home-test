import styled from 'styled-components';

type AccountCardProps = {
  account: Account;
};

const StyledCard = styled.div`
  padding: 15px 20px;
  background-color: rgb(245, 243, 251);
  border: 1px solid #cfc7f0;
  border-radius: 5px;
`;

const StyledTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledText = styled.p`
  color: #6c52d4;
  margin: 5px 0px;
`;

const AccountCard: React.FC<AccountCardProps> = ({ account }) => (
  <StyledCard>
    <StyledTextContainer>
      <StyledText style={{ fontWeight: 'bold' }}>Account number:</StyledText>
      <StyledText style={{ fontWeight: 'bold' }}>
        {account.account_number}
      </StyledText>
    </StyledTextContainer>
    <StyledTextContainer>
      <StyledText>Balance:</StyledText>
      <StyledText>{`${account.available} ${account.currency}`}</StyledText>
    </StyledTextContainer>
  </StyledCard>
);

export default AccountCard;
