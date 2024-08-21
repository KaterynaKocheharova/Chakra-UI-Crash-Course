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
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const data = useLoaderData();
  console.log(data);
  return (
    <SimpleGrid spacing="2" minChildWidth="300px">
      {data &&
        data.map(({ id, title, description, author, img }) => (
          <Card key={id} borderTop="8px" borderColor="purple.400">
            <CardHeader>
              <Box>
                <Heading as="h3" size="small">
                  {title}
                </Heading>
                <Text>by {author}</Text>
              </Box>
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

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
