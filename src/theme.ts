import { createTheme } from '@mui/material/styles';
import { fontWeight } from '@mui/system';
import { colors } from './utils/colors';

// it could be your App.tsx file or theme file that is included in your tsconfig.json
import { Theme } from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}


const theme = createTheme({
 breakpoints: {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
  },
  palette: {
    primary: {
        dark: colors.BLACK,
        main: colors.MAIN_BACKGROUND,
        light: colors.GREY_FOR_BUTTON
    },
    secondary: {
      main: colors.FONTS_COLOR,
      light: colors.RED_FOR_BUTTON,
      dark: colors.BLUE_FOR_BORDER,
    },
  },

  typography: {
    subtitle1: {
        fontSize: 16,
        fontFamily: 'Roboto, sans-serif',
        color: colors.FONTS_COLOR,
        fontWeight: 500,
    },
    subtitle2: {
        fontSize: 14,
        fontFamily: 'Roboto, sans-serif',
        color: colors.FONTS_COLOR,
        fontWeight: 500,
    },
    body1: {
        fontSize: 14,
        fontFamily: 'Roboto, sans-serif',
        color: colors.BLACK,
        fontWeight: 400,
    },
    body2: {
        fontSize: 12,
        fontFamily: 'Roboto, sans-serif',
        color: colors.SECONARY_FONTS_COLOR,
        fontWeight: 400,
    }

  }
});

export default theme;