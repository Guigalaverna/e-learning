import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import {ReactNode} from "react";

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export function Button({children, ...rest}: ButtonProps) {
  return (
    <ChakraButton
      h="50px"
      borderRadius="sm"
      _hover={{bg: "purple.600"}}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
