import {ChakraProvider} from "@chakra-ui/react";
import {ReactNode} from "react";
import {theme} from "../styles/theme";

interface ProviderProps {
  children: ReactNode;
}

export function AppProvider({children}: ProviderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
}
