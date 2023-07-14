import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    pallete: {
      primary: {
        main: string;
      };
      success: {
        main: string;
      };
      alert: {
        main: string;
      };
      warning: {
        main: string;
      };
      info: {
        main: string;
      };
      background: {
        default: string;
        overlay: string;
      };
      textOnBackground: {
        default: string;
        overlay: string;
      };
    };
    typography: {
      h1: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h2: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h3: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h4: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      h5: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      p: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
      pSmall: {
        fontFamily: string;
        fontSize: string;
        lineHeight: string;
      };
    };
    components: {
      button: {
        radius: string;
        fontFamily: string;
        fontSize: string;
        primary: {
          backgroundColor: string;
          color: string;
        };
        secondary: {
          backgroundColor: string;
          color: string;
        };
        disabled: {
          backgroundColor: string;
          color: string;
        };
      };
    };
  }
}
