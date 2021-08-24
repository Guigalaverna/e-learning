import {
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import {Button} from "../components/Button";
import {IconButton} from "../components/IconButton";

import {Divider} from "../components/Divider";
import {Input} from "../components/Input";
import {SignUpLink} from "../components/SignUpLink";
import {signIn, useSession} from "next-auth/client";

import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Login() {
  const toast = useToast();
  const router = useRouter();
  const [session] = useSession();

  async function handleLoginWithGitHub() {
    try {
      await signIn("github", {
        callbackUrl: "http://localhost:3000/dashboard",
        redirect: true,
      });
      // router.push("/dashboard");
    } catch (err) {
      toast({
        title: "Erro ao fazer o login.",
        description: "Algo ocorreu durante o login com o GitHub.",
        status: "error",
        isClosable: true,
        duration: 900,
        position: "top-right",
      });

      console.error(err);
    }
  }

  useEffect(() => {
    console.log(session);
  }, [session]);

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
        <VStack spacing="4">
          <Input variant="filled" placeholder="E-mail" />
          <Input variant="filled" placeholder="Senha" />
        </VStack>

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

        <Button bg="purple.500" mt="4">
          ENTRAR
        </Button>

        <SignUpLink />

        <Divider />

        <Flex align="center" mt="6">
          <Text fontSize="sm">Ou entre com</Text>
          <IconButton onClick={handleLoginWithGitHub}>GITHUB</IconButton>
        </Flex>
      </Flex>
    </Grid>
  );
}
