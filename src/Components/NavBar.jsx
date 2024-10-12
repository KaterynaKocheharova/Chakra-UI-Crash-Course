import {
  Flex,
  Spacer,
  Text,
  HStack,
  Button,
  Box,
  Heading,
  useToast,
} from "@chakra-ui/react";

const NavBar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
    });
  };

  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing={2}>
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>example@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
