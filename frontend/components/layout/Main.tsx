import { ReactNode } from 'react';
import styled from 'styled-components';

type MainProps = {
  children: ReactNode;
};

const Container = styled.main`
  flex-grow: 1;
  padding: 0px 50px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

const Main: React.FC<MainProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default Main;
