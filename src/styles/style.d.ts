import "styled-components";

declare module "styled-components" {
  export interface Palette {
    grayScale: {
      0: string;
      50: string;
      100: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    pink: {
      400: string;
      500: string;
      900: string;
    };
    red: {
      500: string;
    };
    green: {
      500: string;
      900: string;
    };
    gradient: {
      500: string;
    };
  }

  export interface Typography {
    chloe: {
      400: string;
    };
    bebasNeue: {
      400: string;
    };
    montserrat: {
      400: string;
    };
    inter: {
      400: string;
    };
  }

  export interface DefaultTheme {
    palette: Palette;
    typography: Typography;
  }
}
