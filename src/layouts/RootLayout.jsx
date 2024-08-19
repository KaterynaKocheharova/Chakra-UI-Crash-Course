import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan="1"
        minHeight="100vh"
        bg="purple.400"
        p="30px"
      >
        <div>SIDEBAR</div>
      </GridItem>
      <GridItem as="main" colSpan="5" p="40px">
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
