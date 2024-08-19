import {
  Flex,
  Spacer,
  Text,
  HStack,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing={2}>
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>example@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
