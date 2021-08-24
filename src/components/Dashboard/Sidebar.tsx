import {Avatar, Box, Flex, IconButton, Image, VStack} from "@chakra-ui/react";
import {useSession} from "next-auth/client";

import {
  RiDashboardLine,
  RiCalendarLine,
  RiChat1Line,
  RiSettingsLine,
} from "react-icons/ri";

export function Sidebar() {
  const [session] = useSession();

  return (
    <Flex
      as="aside"
      p="8"
      direction="column"
      h="100vh"
      align="center"
      justifyContent="space-between"
    >
      <Box display="flex" align="center" flexDirection="column">
        <Image src="/rocketseat-rocket.svg" alt="Foguete da Rocketseat" />

        <VStack mt="16" spacing="4">
          <IconButton
            aria-label="Dashboard"
            icon={<RiDashboardLine color="white" size={24} />}
          />

          <IconButton
            aria-label="Calendário"
            icon={<RiCalendarLine color="white" size={24} />}
          />

          <IconButton
            aria-label="Conversas"
            icon={<RiChat1Line color="white" size={24} />}
          />

          <IconButton
            aria-label="Configurações"
            icon={<RiSettingsLine color="white" size={24} />}
          />
        </VStack>
      </Box>
      <Avatar name={session?.user.name} src={session?.user.image} />
    </Flex>
  );
}
