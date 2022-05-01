import { ReactNode } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
}
#__next {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
`;

const theme = {
  colors: {},
};

type MansaThemeProviderProps = {
  children: ReactNode;
};

const MansaThemeProvider: React.FC<MansaThemeProviderProps> = ({
  children,
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default MansaThemeProvider;
