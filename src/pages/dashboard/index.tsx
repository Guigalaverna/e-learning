import {Flex} from "@chakra-ui/react";
import {Sidebar} from "../../components/Dashboard/Sidebar";

export default function Dashboard() {
  return (
    <Flex as="main" w="100%" h="100%">
      <Sidebar />
    </Flex>
  );
}
