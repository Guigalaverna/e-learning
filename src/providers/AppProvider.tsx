import {ChakraProvider, ColorModeProvider} from "@chakra-ui/react";
import {ReactNode} from "react";
import {theme} from "../styles/theme";

import {Provider as NextAuthProvider} from "next-auth/client";
import {Session} from "next-auth";
interface ProviderProps {
  children: ReactNode;
  session: Session;
}

export function AppProvider({children, session}: ProviderProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider options={{initialColorMode: "dark"}}>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
