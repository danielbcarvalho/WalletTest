import React, { createContext, useMemo } from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components/native';

import { defaultTheme } from './defaultTheme';

export enum Theme {
  light = 'light',
  dark = 'dark',
}

interface IApplication {
  children: JSX.Element;
}

const themes = {
  light: defaultTheme,
};

export const ThemeContext = createContext({
  theme: Theme.light,
});

export function ThemeProvider({ children }: IApplication) {
  const theme = Theme.light;

  const memoizedValue = useMemo(() => ({ theme }), [theme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}
