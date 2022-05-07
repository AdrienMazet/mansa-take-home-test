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
    accountCardBackground: '#F5F3FB',
    accountCardBorder: '#CFC7F0',
    accountCardText: '#6C52D4',
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
