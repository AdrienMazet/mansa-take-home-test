import { ReactNode } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  padding-left: 50px;
  flex-grow: 1;
`;

const myMain: React.FC<MainProps> = ({ children }) => <Main>{children}</Main>;

export default myMain;
