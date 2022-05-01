import { ReactNode } from 'react';
import Header from './Header';
import Main from './Main';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);

export default Layout;
