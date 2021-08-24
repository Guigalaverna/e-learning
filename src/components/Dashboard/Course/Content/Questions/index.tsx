import {Avatar, Box, Divider, Flex, Text} from "@chakra-ui/react";
import {useSession} from "next-auth/client";

export function Questions() {
  const [session] = useSession();

  return (
    <Flex w="100%">
      <Flex
        w="100%"
        align="center"
        justify="space-evenly"
        bg="gray.700"
        px="10"
        py="8"
        borderRadius="md"
      >
        <Flex>
          <Avatar name={session?.user.name} src={session?.user.image} />
          <Box ml="5">
            <Text>{session?.user.name}</Text>
            <Text>24/08/2021</Text>
          </Box>
          <Divider orientation="vertical" mx="4" />
        </Flex>
        <Flex maxW="520px" direction="column">
          <Text as="strong" mb="2">
            Como ligo o PC 😁
          </Text>
          <Text
            as="p"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            color="gray.500"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos porro
            consequuntur possimus nostrum. Necessitatibus doloribus, quisquam
            suscipit, esse molestias exercitationem illo, inventore deserunt
            quasi natus debitis eligendi sint quo tenetur!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
