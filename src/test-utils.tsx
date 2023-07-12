// TODO: Verificar essa melhoria nos testes
import React from 'react';
import {
  render,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components/native';

import { mockDefaultTheme } from './theme/defaultTheme';

interface IAllThemeProviders {
  children: React.ReactElement;
}
const AllTheProviders = ({ children }: IAllThemeProviders) => {
  return <ThemeProvider theme={mockDefaultTheme}>{children}</ThemeProvider>;
};

function customRender(
  ui: React.ReactElement,
  options = {} as RenderOptions,
): RenderAPI {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

export function rendererCreate(
  component: React.ReactElement,
): ReactTestRenderer {
  return renderer.create(<AllTheProviders>{component}</AllTheProviders>);
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
