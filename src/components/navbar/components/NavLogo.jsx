import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function NavLogo() {
  return (
    <Box  >
      <Link  to='/'><Text 
                    fontSize={['14px','14px','16px','16px']} 
                    paddingLeft={{base:'30px', sm:'60px'}} 
                    fontWeight="bold">
        TEECHA
      </Text></Link>
    </Box>
  )
}