import 'styled-components/native';

declare module 'styled-components/native' {
  interface TipographyKindProps {
    fontFamily: string;
    fontSize: string;
    lineHeight?: string;
  }

  interface TipographyProps {
    h1: TipographyKindProps;
    h2: TipographyKindProps;
    h3: TipographyKindProps;
    h4: TipographyKindProps;
    h5: TipographyKindProps;
    p: TipographyKindProps;
    pSmall: TipographyKindProps;
  }

  interface LabelProps extends TipographyKindProps {
    color: string;
  }
  interface InputProps extends TipographyKindProps {
    color: string;
    backgroundColor: string;
    borderRadius: string;
    padding: string;
    label: LabelProps;
  }

  interface ButtonProps extends TipographyKindProps {
    radius: string;
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
  }

  interface PalleteProps {
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
  }

  interface Header {
    title: HeaderTitle;
  }

  interface HeaderTitle extends TipographyKindProps {
    register: {
      color: string;
    };
    cardList: {
      color: string;
    };
  }

  export interface DefaultTheme {
    pallete: PalleteProps;
    typography: TipographyProps;
    components: {
      button: ButtonProps;
      input: InputProps;
      header: Header;
    };
  }
}
