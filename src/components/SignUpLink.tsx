import {Link, Text} from "@chakra-ui/react";

export function SignUpLink() {
  return (
    <Text textAlign="center" fontSize="sm" color="gray.300" mt="6">
      Não tem uma conta?{" "}
      <Link
        color="purple.600"
        fontWeight="medium"
        _hover={{color: "purple.500"}}
      >
        Criar uma conta
      </Link>
    </Text>
  );
}
