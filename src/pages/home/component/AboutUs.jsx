import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import AboutBanner from "../../../assets/images/about-banner.jpg";
import BlueGlasses from "../../../assets/images/glasses-blue.jpg";
import { IoArrowForward } from "react-icons/io5";

import { Text, Box, Flex, Heading, Image, Button } from "@chakra-ui/react";
import React from "react";

const AboutUs = () => {
  return (
    <Flex
      py={{ base: "6em", md: "10em" }}
      justifyContent={{ md: "space-between" }}
      flexDir={{ base: "column", md: "row" }}
      px={{ base: "1em", md: "6em" }}
    >
      <Box position="relative" width={{ base: "100%", md: "50%" }}>
        <Image
          width={{ base: "100%", md: "80%" }}
          src={AboutBanner}
          alt="about"
        />
        <Box
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
          bg="white"
          padding={{ base: "0.5em", md: "1rem" }}
          zIndex={1}
          position="absolute"
          width={{ base: "70%", md: "40%" }}
          bottom={{ base: "-5em", md: "-4em" }}
          right={{ base: "0.5em", md: "0em" }}
          borderRadius="8px"
        >
          <Heading size="1rem" py={{ base: 1, md: 4 }}>
            Contact us
          </Heading>
          <Text size="0.8rem">You can reach us via our dedicated lines!</Text>
          <Flex gap={2} py={{ base: 1, md: 4 }}>
            <FaWhatsapp />
            <FaPhone />
          </Flex>
        </Box>
      </Box>

      <Box mt={{ base: "10em", md: "0" }} width={{ base: "100%", md: "39%" }}>
        <Flex position="relative" justifyContent="space-between">
          <Heading fontSize="1.2rem">About Us</Heading>
          <Image
            position="absolute"
            top={{ base: "-2em", md: "-5rem" }}
            right="2px"
            width={{ base: "20%", md: "24%" }}
            src={BlueGlasses}
            alt="glasses"
          />
        </Flex>
        <Box>
          <Heading py={8}>Knowledge is power!</Heading>
          <Text>
            We are good at what we do. taking your wards from the very first
            beginning of A-Writing their WEAC an make it to the higher leve in
            their education.
          </Text>
        </Box>
        <Button
          colorScheme="black"
          bg="#000000"
          size="lg"
          mb={{ base: 6 }}
          fontWeight="bold"
          px="6"
          py={{ base: "2", md: "7" }}
          width={{ base: "150px", md: "180px" }}
          borderRadius="25px"
          my={8}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to={"/"}>Open</Link>
          <IoArrowForward size={24} color="white" />
        </Button>
      </Box>
    </Flex>
  );
};

export default AboutUs;
