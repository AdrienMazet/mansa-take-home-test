import { ReactNode } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

const StyledMain = styled.main`
  flex-grow: 1;
  padding-left: 50px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

const Main: React.FC<MainProps> = ({ children }) => (
  <StyledMain>{children}</StyledMain>
);

export default Main;
