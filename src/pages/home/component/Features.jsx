import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import ClassOne from "../../../assets/images/Class-one-removebg-preview.jpg";
import ClassTwo from "../../../assets/images/Class-two-removebg-preview.jpg";
import ClassThree from "../../../assets/images/Class-three-removebg-preview.jpg";
const Features = () => {
  return (
    <Flex
      pb={14}
      mt={{ base: "100px", md: "10em" }}
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      position="relative"
      px={{ base: "1em", md: "6em" }}
    >
      <Box textAlign="center">
        <Heading>Reasons to enroll your wards</Heading>
        <Text py={{ base: 2, md: 8 }} px={{ base: "10%", md: "25em" }}>
          There many features to help your wards in accommplishing his desired
          goals
        </Text>
      </Box>

      <Box
        display="flex"
        mt={10}
        justifyContent={{ md: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          p={10}
          display="flex"
          justifyContent="center"
          alignContent="center"
          flexDir="column"
          textAlign="center"
          width={{ base: "100%", md: "25%" }}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        >
          <Box display="grid" placeContent="center" width="100%">
            <Image width="80px" src={ClassOne} alt="description" />
          </Box>
          <Heading my={4} fontSize="1.3rem" textAlign="center">
            Top-Rated
          </Heading>{" "}
          <Text textAlign="center">
            Our effort is always gear toward the best at all time. Morale
            upbring and best academic performance set us apart
          </Text>
        </Box>
        <Box
          p={10}
          display="flex"
          justifyContent="center"
          alignContent="center"
          flexDir="column"
          textAlign="center"
          width={{ base: "100%", md: "25%" }}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        >
          <Box display="grid" placeContent="center" width="100%">
            <Image width="80px" src={ClassTwo} alt="description" />
          </Box>
          <Heading my={4} fontSize="1.3rem" textAlign="center">
            Top-Rated
          </Heading>{" "}
          <Text textAlign="center">
            Our effort is always gear toward the best at all time. Morale
            upbring and best academic performance set us apart
          </Text>
        </Box>
        <Box
          p={10}
          display="flex"
          justifyContent="center"
          alignContent="center"
          flexDir="column"
          textAlign="center"
          width={{ base: "100%", md: "25%" }}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        >
          <Box display="grid" placeContent="center" width="100%">
            <Image width="80px" src={ClassThree} alt="description" />
          </Box>
          <Heading my={4} fontSize="1.3rem" textAlign="center">
            Top-Rated
          </Heading>{" "}
          <Text textAlign="center">
            Our effort is always gear toward the best at all time. Morale
            upbring and best academic performance set us apart
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Features;
