import {
  AspectRatio,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import {Questions} from "../../components/Dashboard/Course/Content/Questions";
import {Header} from "../../components/Dashboard/Course/Header";
import {Sidebar} from "../../components/Dashboard/Sidebar";

export default function Dashboard() {
  return (
    <Flex as="main" w="100%" h="100%">
      <Sidebar />
      <Flex as="section" w="100%" h="100vh" m="0 auto" justify="center">
        <Flex minW="60%" align="flex-start" direction="column" py="8">
          <Header />
          <AspectRatio mt="8" minW="100%" minH="315px" ratio={2}>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/mnm9mNBFfnA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
          <Tabs isLazy mt="8" colorScheme="purple" minW="100%">
            <TabList maxW="56">
              <Tab>Notas</Tab>
              <Tab>Perguntas</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p="0" mt="4">
                <Questions />
              </TabPanel>
              <TabPanel p="0" mt="4">
                <Questions />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
}
