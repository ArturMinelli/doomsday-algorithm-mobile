import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#323238',
      400: '#7C7C8A',
      300: '#8D8D99',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    green: {
      700: '#015F43',
      500: '#00875F',
      300: '#00B37E',
      100: '#00FF99',
    },
    yellow: {
      500: '#F7DD43',
      600: '#BBA317',
    },
    red: {
      700: '#00875F',
      500: '#F03847',
    },
    white: '#FFFFFF'
  },
  // fonts: {
  //   heading: 'Roboto_700Bold',
  //   body: 'Roboto_400Regular',
  //   medium: 'Roboto_500Medium'
  // },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    22: 87
  }
});