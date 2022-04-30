import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import MansaThemeProvider from 'styles';

const renderWithTheme = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: MansaThemeProvider, ...options });

export * from '@testing-library/react';
export { renderWithTheme as render };
