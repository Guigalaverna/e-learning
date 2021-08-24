import { Theme, extendTheme } from "@chakra-ui/react";

export const theme: Theme = extendTheme({
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    mono: "Menlo, monospace",
  },

  weights: {
    normal: 400,
    medium: 500,
    bold: 700
  },

  raddi: {
    sm: '5px',
    md: '8px'
  },

  sizes: {
    '6xl': '54px'
  },

  colors: {
    purple: {
      500: '#8257e5'
    },

    gray: {
      300: '#e1e1e6',
      600: '#29292e',
      700: '#202024',
      800: "#121214"
    }
  },

  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white'
      }
    }
  }
})