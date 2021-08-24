import { Theme, extendTheme } from "@chakra-ui/react";

export const theme: Theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white'
      }
    }
  }
})