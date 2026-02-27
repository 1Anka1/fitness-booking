import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number[];

    fonts: {
      body: string;
    };

    fontSizes: {
      xxs: number;
      xs: number;
      s: number;
      m: number;
      ml: number;
      l: number;
      xl: number;
    };

    fontWeights: {
      light: number;
      normal: number;
      lightMedium: number;
      medium: number;
      bold: number;
    };

    colors: {
      primary: string;
      primaryLight: string;

      background: string;
      backgroundDark: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
      label: string;
      sideBorder: string;
      border: string;
      borderDark: string;

      black: string;
      white: string;
      violetLight: string;
      violetDark: string;
      statusInfo: string;
      statusWarning: string;
      statusSuccess: string;
      statusError: string;
    };

    radius: {
      none: string;
      round: string;
    };

    cubic: {
      timingFunction: string;
    };
  }
}
