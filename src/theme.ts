import { createTheme } from '@mui/material/styles';
import { fontWeight } from '@mui/system';
import { colors } from './utils/colors';

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
        fontWeight: 700,
    },
    subtitle2: {
        fontSize: 14,
        fontFamily: 'Roboto, sans-serif',
        color: colors.FONTS_COLOR,
        fontWeight: 700,
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