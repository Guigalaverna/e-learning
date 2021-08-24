import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {}

export function Input({...rest}: InputProps) {
  return (
    <ChakraInput
      h="50px"
      bg="gray.800"
      focusBorderColor="purple.500"
      borderRadius="md"
      {...rest}
    />
  );
}
