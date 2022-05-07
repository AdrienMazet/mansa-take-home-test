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
  font-family: Arial;
}
`;

const theme = {
  colors: {
    text: '#183753',
    headerBorder: '#EEEBFA',
    mainBackground: '#F9F9F9',
    accountCardBackground: '#f5f3fb',
    accountCardBorder: '#cfc7f0',
    accountCardText: '#6c52d4',
  },
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
