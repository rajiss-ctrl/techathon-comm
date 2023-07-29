import React from "react";
import HeroIMG from "../../../assets/images/hero-img.jpg";
import RIMG from "../../../assets/images/R.jpg";
import SIMG from "../../../assets/images/S.jpg";
// import SchBoy from "../../../assets/images/school-uni-1654494195_6378209_1589397.jpeg";
import Music from "../../../assets/images/music.jpg";
import PrincessTwo from "../../../assets/images/princess-2.jpg";
import Princess from "../../../assets/images/princess-1.jpg";
import {
  Box,
  Text,
  Flex,
  Image,
  IconButton,
  SlideFade,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import ImageSlider from "../../../components/image-slide/ImageSlider";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
const images = [
  HeroIMG,
  RIMG,
  SIMG,
  Music,
  PrincessTwo,
  Princess,

  // Add more image URLs here
];

const HeroSection = () => {
  return (
    <Flex
      px={["1em", "2em", "2em", "6em"]}
      width="100%"
      justifyContent="space-between"
      flexDir={{ base: "column", md: "row" }}
      mt={{ base: "", md: "-5em" }}
      pt={{ base: "10.5em", md: "" }}
    >
      <Box zIndex="1">
        <Box
          maxW={["100%", "40%", "600px", "600px"]}
          p={{ base: "0", md: "4" }}
        >
          <Text>MEET CHANGE!</Text>
          <Heading
            paddingRight={{ base: "0", md: "2rem" }}
            py={{ base: "0", md: "1rem" }}
            as="h1"
            size={{ base: "xl", md: "2xl" }}
            color="black"
            mb="4"
          >
            Welcome to{" "}
            <span style={{ color: "rgb(227, 79, 156)" }}>
              Reputable International Schools
            </span>{" "}
          </Heading>
          <Text
            paddingRight={{ base: "0", md: "4rem" }}
            py={{ base: "1rem", md: "2rem" }}
            fontSize="xl"
            color="black"
            mb="8"
          >
            Empowering minds to shape brighter futures. Take a step in creating
            a better future for your wards.
          </Text>

          <Button
            display="flex"
            justifyContent="space-between"
            colorScheme="black"
            bg="#000000"
            size="lg"
            mb={{ base: 6 }}
            fontWeight="bold"
            px="6"
            py={{ base: "2", md: "7" }}
            width={{ base: "150px", md: "180px" }}
            borderRadius="25px"
          >
            <Link to={"/"}>Open</Link>
            <IoArrowForward size={24} color="white" />
          </Button>
        </Box>
      </Box>
      <Box
        position="relative"
        width={{ base: "100%", md: "50%" }}
        minHeight={{ base: "300px", md: "400px" }}
      >
        {/* <Image position="" src={HeroIMG} alt="Slider Image" /> */}
        <Box position="relative">
          <ImageSlider images={images} />
        </Box>
        <Box
          fontSize="1.2rem"
          width={{ base: "100%", md: "80%" }}
          height={{ base: "3rem", md: "4rem" }}
          borderRadius={{ base: "10px", md: "20px" }}
          bg="white"
          zIndex="2"
          position="absolute"
          left={{ base: "0", md: "-3rem" }}
          bottom={{ base: "-5px", md: "-0.5rem" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px="2rem"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        >
          <Text>
            Meet the{" "}
            <span style={{ fontWeight: "bold", color: "rgb(252, 77, 114)" }}>
              students
            </span>
            !
          </Text>
          {/* <span role="img" aria-label="Smiling Face">
            &#x1F604;
          </span> */}
          <Box as="span" role="img" aria-label="Clapping Hands">
            😇 ;🙋
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default HeroSection;
