import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Divider,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import data from "../../data/db.json";

export default function Dashboard() {
  const tasks = data.tasks;
  return (
    <SimpleGrid spacing="2" minChildWidth="300px">
      {tasks &&
        tasks.map(({ id, title, description, author, img }) => (
          <Card key={id} borderTop="8px" borderColor="purple.400">
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={img} />
                <Box>
                  <Heading as="h3" size="small">
                    {title}
                  </Heading>
                  <Text>by {author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody>
              <Text>{description}</Text>
            </CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}

// export const tasksLoader = async () => {
//   const res = await fetch("http://localhost:5173/tasks");
//   return res.json();
// };
