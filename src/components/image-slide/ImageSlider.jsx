import React, { useState, useEffect } from "react";
import { Box, Flex, Image, IconButton, SlideFade } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNextImage, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex, interval]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box width="100%" height="100%" position="relative">
      {images.map((imageUrl, index) => (
        <SlideFade
          key={index}
          in={index === currentImageIndex}
          offsetY="20px"
          style={{
            position: "absolute",
            // top: "0",
            // left: "0",
            width: "100%",
            height: "100%",
            zIndex: index === currentImageIndex ? 1 : 0,
          }}
        >
          <Image
            width="100%"
            height={{ base: "300px", md: "400px" }}
            src={imageUrl}
            alt="Slider Image"
          />
        </SlideFade>
      ))}

      <Flex
        position="absolute"
        // height="100%"
        top={{ base: "", md: "160px" }}
        left="0"
        right="0"
        justifyContent="space-between"
        alignItems="center"
        px=""
        zIndex="1"
        // transform="translateY(-50%)"
        pointerEvents="none"
      >
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous Image"
          onClick={goToPreviousImage}
          colorScheme="white"
          bg="rgb(227, 79, 156, 0.6)"
          color="white"
          pointerEvents="auto"
        />
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next Image"
          onClick={goToNextImage}
          colorScheme="white"
          bg="rgb(227, 79, 156, 0.6)"
          color="white"
          pointerEvents="auto"
        />
      </Flex>
    </Box>
  );
};

export default ImageSlider;
