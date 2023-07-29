import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Secondary from "../../../assets/images/secondary-1.jpg";
import Art from "../../../assets/images/art.jpg";
import Commercial from "../../../assets/images/commercial.jpg";
import Science from "../../../assets/images/science.jpg";

import React from "react";

const SecondarySection = () => {
  return (
    <Box
      position=""
      overflow="hidden"
      width={{ base: "90%", md: "95%" }}
      py={{ base: 4, md: 10 }}
      left="0"
    >
      <Box
        bg="rgb(232,244,74)"
        borderRightRadius={{ base: "15px", md: "5em" }}
        pr={{ base: 4, md: 10 }}
        pl={{ base: 4, md: "15%" }}
        py={{ base: 4, md: 10 }}
      >
        <Box width="100%" textAlign="center">
          <Box display="grid" placeContent="center">
            <Image width="80px" src={Secondary} alt="book" />
          </Box>
          <Heading
            px={{ base: "10%", md: "30%" }}
            py={2}
            textAlign="center"
            fontSize={{ base: "1.5rem", md: "2.5rem" }}
          >
            Reputable Int'l School!
          </Heading>
        </Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          mt="30px"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box>
            <Box mt={{ base: "50px" }} display="grid" placeContent="center">
              <Image src={Art} alt="book" />
            </Box>
            <Heading
              py={4}
              textAlign="center"
              fontSize={{ base: "1rem", md: "2rem" }}
            >
              Art
            </Heading>
            <Text textAlign="center" px={{ base: "0.5rem", md: "3rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, modi
              eaque? Dicta eius provident molestias! Asperiores nam sequi
              nostrum aut?
            </Text>
          </Box>
          <Box>
            <Box mt={{ base: "50px" }} display="grid" placeContent="center">
              <Image src={Commercial} alt="book" />
            </Box>
            <Heading
              py={4}
              textAlign="center"
              fontSize={{ base: "1rem", md: "2rem" }}
            >
              Commercial
            </Heading>
            <Text textAlign="center" px={{ base: "0.5rem", md: "3rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, modi
              eaque? Dicta eius provident molestias! Asperiores nam sequi
              nostrum aut?
            </Text>
          </Box>
          <Box pb="50px">
            <Box mt={{ base: "50px" }} display="grid" placeContent="center">
              <Image src={Science} alt="book" />
            </Box>
            <Heading
              py={4}
              textAlign="center"
              fontSize={{ base: "1rem", md: "2rem" }}
            >
              Science
            </Heading>
            <Text textAlign="center" px={{ base: "0.5rem", md: "3rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, modi
              eaque? Dicta eius provident molestias! Asperiores nam sequi
              nostrum aut?
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SecondarySection;
