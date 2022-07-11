import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  palette: {
    grayScale: {
      0: "#FFFFFF",
      50: "#FFFBF8",
      100: "#E5E5E5",
      400: "#707070",
      500: "#898989",
      600: "#818181",
      700: "#555555",
      800: "#222222",
      900: "#111111",
    },
    pink: {
      400: "#F7C4D2",
      500: "#EE9BB5",
      900: "#E25589",
    },
    red: {
      500: "#C02333",
    },
    green: {
      500: "#93A956",
      900: "#22423B",
    },
    gradient: {
      500: "linear-gradient(298.98deg, #EE9BB5 27.71%, #E25589 86.14%)",
    },
  },

  typography: {
    chloe: {
      400: "400 1rem Chloe, serif",
    },
    bebasNeue: {
      400: "400 1rem BebasNeue, sans-serif",
    },
    montserrat: {
      400: "400 1rem Montserrat, sans-serif",
    },
    inter: {
      400: "400 1rem Inter, sans-serif",
    },
  },
};
