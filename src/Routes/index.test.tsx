import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen } from '@testing-library/react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import Routes from './index';
import { ThemeProvider } from '../theme';
import { translations } from '../translation';

i18n.init({
  resources: translations,
  lng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

describe('Testing react navigation', () => {
  test('screen contains card', async () => {
    const component = (
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </I18nextProvider>
      </ThemeProvider>
    );

    render(component);

    const title = await screen.findByText('meus cartões');

    expect(title).toBeTruthy();
  });
});
