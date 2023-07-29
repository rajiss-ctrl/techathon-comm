import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import Flag from "../../assets/images/flag.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Flex
      mt="14em"
      px={{ base: "1em", md: "6em" }}
      py={14}
      width={"100%"}
      color={"#ffffff"}
      bg={" rgb(0, 0, 0)"}
      justifyContent={"space-between"}
      flexDirection={["column", "column", "row", "row"]}
    >
      <Box>
        <Flex alignItems="center" gap={2}>
          <Image src={Flag} alt="flag" />
          <Link to="/">
            <Heading fontSize="1.5rem">R.I.S</Heading>
          </Link>
        </Flex>
        <Text width="50%" py={8}>
          So important to take care of your wards right education. Right
          education is the best legacy!
        </Text>
        <a href="https://www.twitter.com/rajisanjo">From rajissCtrlTech</a>

        <Flex py={4} gap={2} color="white">
          <FaTwitterSquare size="40px" />
          <FaFacebookSquare size="40px" />
        </Flex>
      </Box>
      <Box>
        <Heading fontSize="1.5rem">Features</Heading>
        <Box py={8}>
          <Text>Creche</Text>
          <Text>Pre-Basic education</Text>
          <Text>Basic education</Text>
          <Text>Junior secondary School</Text>
          <Text>Senior Secondary School</Text>
        </Box>
      </Box>
      <Box>About Us</Box>
      <Box>Contact Us</Box>
      <Box>Social Medial</Box>
      <Box>Mgt</Box>
    </Flex>
  );
};

export default Footer;
