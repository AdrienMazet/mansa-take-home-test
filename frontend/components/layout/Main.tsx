import { ReactNode } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  padding-left: 50px;
  flex-grow: 1;
`;

const Main: React.FC<MainProps> = ({ children }) => (
  <StyledMain>{children}</StyledMain>
);

export default Main;
