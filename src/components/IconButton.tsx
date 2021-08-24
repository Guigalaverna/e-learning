import {ButtonProps as ChakraButtonProps} from "@chakra-ui/react";
import {ReactNode} from "react";
import {Button} from "./Button";

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export function IconButton({children}: ButtonProps) {
  return (
    <Button h="50px" flex="1" bg="gray.600" ml="6" _hover={{bg: "purple.500"}}>
      {children}
    </Button>
  );
}
