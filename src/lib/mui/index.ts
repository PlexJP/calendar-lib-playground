import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0085E8',
    },
    secondary: {
      main: '#3EADC6',
    },
    error: {
      main: '#F83F55',
    },
    warning: {
      main: '#FFA910',
    },
    info: {
      main: '#0085E8',
    },
    success: {
      main: '#5DBD72',
    },
    text: {
      primary: '#444444',
      secondary: '#666666',
      disabled: '#BBBBBB',
    },
    common: {
      black: '#222222',
      white: '#FFFFFF',
      // @ts-expect-error - This is a valid color
      red: '#F83F55',
      redLight: '#FF9DA9',
      redExtraLight: '#FFE5E5',
      blue: '#0085E8',
      blueLight: '#79BEF3',
      blueExtraLight: '#EDF7FF',
      blueGreen: '#3EADC6',
      blueGreenLight: '#7AC3D3',
      blueGreenExtraLight: '#E3FDFF',
      yellow: '#FFA910',
      yellowLight: '#FECF74',
      yellowExtraLight: '#FFF9E2',
      green: '#5DBD72',
      greenLight: '#97E29E',
      greenExtraLight: '#E8F8EF',
      gray: '#BBBBBB',
      pearlGray: '#F4F4F4',
      pearlGrayLight: '#F8F8F8',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    htmlFontSize: 16,
    fontSize: 12,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: 32,
      fontWeight: 700,
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
    },
    h3: {
      fontSize: 28,
      fontWeight: 700,
    },
    h4: {
      fontSize: 26,
      fontWeight: 700,
    },
    h5: {
      fontSize: 24,
      fontWeight: 700,
    },
    h6: {
      fontSize: 20,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      fontWeight: 500,
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
  spacing: 4,
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    // backdrop: 1600,
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
})
