import {
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

import {Divider} from "../components/Divider";

export default function Login() {
  return (
    <Grid
      as="main"
      h="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex as="section" gridArea="logo" direction="column" align="flex-start">
        <Image src="/rocketseat.svg" alt="Rocketseat logo" />

        <Heading fontSize="5xl" lineHeight="shorter" mt="16">
          Faça seu login na plataforma
        </Heading>
      </Flex>
      <Flex
        gridArea="form"
        h="100%"
        bg="gray.700"
        borderRadius="md"
        direction="column"
        align="stretch"
        p="16"
      >
        <Input
          h="50px"
          bg="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="E-mail"
        />

        <Input
          h="50px"
          bg="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          mt="2"
          placeholder="Senha"
        />

        <Link
          alignSelf="flex-start"
          mt="2"
          fontSize="sm"
          color="purple.600"
          fontWeight="medium"
          _hover={{
            color: "purple.500",
          }}
        >
          Esqueci minha senha
        </Link>

        <Button
          mt="6"
          bg="purple.500"
          h="50px"
          borderRadius="sm"
          _hover={{bg: "purple.600"}}
        >
          ENTRAR
        </Button>
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

        <Divider />

        <Flex align="center" mt="6">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            h="50px"
            flex="1"
            bg="gray.600"
            ml="6"
            _hover={{bg: "purple.500"}}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
