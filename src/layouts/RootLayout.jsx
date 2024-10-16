import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        p={{ base: "20px", lg: "30px" }}
        minHeight={{ lg: "100vh" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
