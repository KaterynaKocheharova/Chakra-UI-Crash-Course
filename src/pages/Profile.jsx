import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="50px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple" }}>Account info</Tab>
        <Tab _selected={{ color: "white", bg: "purple" }}>Task info</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              DASJBOARD Email: example@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              inventore quae itaque culpa reprehenderit accusantium. Similique,
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              perferendis doloribus eum aut incidunt tempore doloremque, enim
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              enim suscipit ullam, laboriosam debitis repellat aperiam deleniti
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              inventore quae itaque culpa reprehenderit accusantium. Similique,
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
