import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  IconButton,
  MenuIcon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import RicLogo from "../../assets/images/ric-logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box
      position=""
      zIndex="1"
      bg="transparent"
      px={["1em", "2em", "2em", "6em"]}
      py={{ base: "1.5em", md: "2.5em" }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Flex alignItems="center">
        <Link to="/">
          <Box>
            {/* <Heading as="h1" size="lg" color="rgb(79,79,79)">
            RIC
          </Heading> */}
            <Image width="40px" src={RicLogo} alt="ric" />
          </Box>
        </Link>
        <Box
          paddingLeft="10em"
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          <Link
            to="/graduands"
            style={{ marginRight: "3em", fontSize: "1rem" }}
            color="black"
            _hover={{ textDecoration: "none" }}
          >
            Graduands
          </Link>
          <Link
            to="/courses"
            style={{ marginRight: "3em" }}
            color="black"
            _hover={{ textDecoration: "none" }}
          >
            Courses
          </Link>
          <Link to="/admin" color="black" _hover={{ textDecoration: "none" }}>
            Admin
          </Link>
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent={"space-between"}>
        <Menu>
          <MenuButton
            as={Button}
            variant=""
            color="rgb(51,51,51)"
            outline="none"
            px={{ base: "1.2em", md: "2em" }}
            borderRadius="10em"
            border="2px solid rgb(51,51,51)"
          >
            Sign In
          </MenuButton>
        </Menu>

        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={Button}
              variant=""
              color=""
              outline="none"
              p={0}
              border="0.4px solid"
            >
              <IconButton
                bg="transparent"
                aria-label="Menu"
                icon={<HamburgerIcon />}
              />
            </MenuButton>
            <MenuList bg="white">
              <MenuItem>Get Started</MenuItem>
              <MenuItem>Course</MenuItem>
              <MenuItem>Dashboard</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
