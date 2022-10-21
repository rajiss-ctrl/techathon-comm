import React from "react"
import {FaBars, FaTimes } from 'react-icons/fa'
import { Box } from "@chakra-ui/react"

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} paddingRight={['30px', '0', '0', '0']} onClick={toggle}>
      {isOpen ?  <FaTimes/> :  <FaBars/>}
    </Box>
  )
}

