import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import HeroSection from "./component/HeroSection";
import "../../index.css";
import Features from "./component/Features";
import AboutUs from "./component/AboutUs";
import SecondarySection from "./component/SecondarySection";
const Home = ({}) => {
  return (
    <Box position="relative">
      <Box
        as="span"
        mr="2"
        _before={{
          content: "''", // Empty content
          display: "inline-block",
          width: "100%",
          height: "50%",
          bg: "rgb(232,244,74)",
          position: "absolute",
          zIndex: "-1",
          top: "-200px",
          right: "0",
          overflow: "hidden",
          clipPath: "circle(50% at 100% -5%)",
          // transform: "translateY(-50%)",
        }}
      />
      <HeroSection />
      <Features />
      <AboutUs />
      <SecondarySection />
    </Box>
  );
};

export default Home;
