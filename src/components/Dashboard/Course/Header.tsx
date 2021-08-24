import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export function Header() {
  return (
    <VStack align="flex-start" spacing="4">
      <Flex as="header">
        <Breadcrumb color="gray.500">
          <BreadcrumbItem _hover={{color: "gray.300"}}>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem _hover={{color: "gray.300"}}>
            <BreadcrumbLink href="#">Cursos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem _hover={{color: "gray.300"}}>
            <BreadcrumbLink href="#">Informática</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      <Heading as="h1" maxW="2xl">
        Como remover apps da inicialização do Windows
      </Heading>
      <Text color="gray.500">Escritor: Professor Rodrigo</Text>
    </VStack>
  );
}
