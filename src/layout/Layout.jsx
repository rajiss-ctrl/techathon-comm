import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box position="relative">
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
