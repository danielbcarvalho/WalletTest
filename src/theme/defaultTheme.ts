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
    },
    textOnBackground: {
      default: '#FFF',
      overlay: '#142995',
    },
  },
  typography: {
    h1: {
      fontFamily: 'PTSans-Caption',
      fontSize: '28px',
      lineHeight: '42px',
    },
    h2: {
      fontFamily: 'PTSans-Caption',
      fontSize: '26px',
      lineHeight: '38px',
    },
    h3: {
      fontFamily: 'PTSansCaption',
      fontSize: '22px',
      lineHeight: '34px',
    },
    h4: {
      fontFamily: 'PTSans-Regular',
      fontSize: '20px',
      lineHeight: '32px',
    },
    h5: {
      fontFamily: 'PTSans-Regular',
      fontSize: '18px',
      lineHeight: '30px',
    },
    p: {
      fontFamily: 'PTSans-Regular',
      fontSize: '16px',
      lineHeight: '28px',
    },
    pSmall: {
      fontFamily: 'PTSans-Regular',
      fontSize: '14px',
      lineHeight: '26px',
    },
  },
  components: {
    button: {
      radius: '12px',
      fontFamily: 'PTSans-Regular',
      fontSize: '18px',
      lineHeight: '28px',
      primary: {
        backgroundColor: '#12C2E9',
        color: '#FFFFFF',
      },
      secondary: {
        backgroundColor: '#A5FF32',
        color: '#142995',
      },
      disabled: {
        backgroundColor: '#EEEEEE',
        color: '#BBBBBB',
      },
    },
    input: {
      label: {
        fontFamily: 'PTSans-Regular',
        fontSize: '14px',
        color: '#FFFFFF',
        lineHeight: '16px',
      },
      fontFamily: 'PTSans-Regular',
      fontSize: '16px',
      color: '#111',
      backgroundColor: '#EEEEEE',
      borderRadius: '12px',
      padding: '16px',
    },
    header: {
      title: {
        fontFamily: 'PTSans-Caption',
        fontSize: '22px',
        lineHeight: '24px',
        register: {
          color: '#142995',
          backgroundColor: '#FFFFFF',
        },
        cardList: {
          color: '#12C2E9',
        },
      },
    },
    card: {
      black: {
        backgroundColor: '#000000',
        color: '#FFFFFF',
      },
      green: {
        backgroundColor: '#A5FF32',
        color: '#3F3F3F',
      },
      title: {
        fontFamily: 'PTSans-Regular',
        fontSize: '18px',
        lineHeight: '20px',
      },
      name: {
        fontFamily: 'PTSans-Regular',
        fontSize: '16px',
        lineHeight: '18px',
      },
      text: {
        fontFamily: 'PTSans-Regular',
        fontSize: '14px',
        lineHeight: '16px',
      },
    },
  },
};

export const mockDefaultTheme: object = defaultTheme;
