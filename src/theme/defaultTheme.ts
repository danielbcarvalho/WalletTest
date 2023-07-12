import { DefaultTheme } from 'styled-components/native';

export const defaultTheme: DefaultTheme = {
  pallete: {
    primary: {
      main: '#142995',
    },
    success: {
      main: '#A5FF32',
    },
    alert: {
      main: '#FF0000',
    },
    warning: {
      main: '#FFB800',
    },
    info: {
      main: '#12C2E9',
    },
    background: {
      default: '#142995',
      overlay: '#EEEEEE',
      disabled: '#EEEEEE',
      blackCard: '#111111',
      greenCard: '#A5FF32',
      input: '#FFF',
      info: '#12C2E9',
    },
    textOnBackground: {
      default: '#FFF',
      greenCard: '#142995',
      info: '#FFF',
      disabled: '#BBBBBB',
    },
    icon: {
      default: '#282828',
    },
    text: {
      default: '#000',
      grayDarker: '#7a7a7a',
    },
  },
  typography: {
    h1: {
      fontFamily: 'PT Sans Caption',
      fontSize: '28px',
    },
    h2: {
      fontFamily: 'PT Sans Caption',
      fontSize: '26px',
    },
    h3: {
      fontFamily: 'PT Sans Caption',
      fontSize: '22px',
    },
    h4: {
      fontFamily: 'PT Sans',
      fontSize: '20px',
    },
    h5: {
      fontFamily: 'PT Sans',
      fontSize: '18px',
    },
    p: {
      fontFamily: 'PT Sans',
      fontSize: '16px',
    },
    pSmall: {
      fontFamily: 'PT Sans',
      fontSize: '14px',
    },
  },
};

export const mockDefaultTheme: object = defaultTheme;
