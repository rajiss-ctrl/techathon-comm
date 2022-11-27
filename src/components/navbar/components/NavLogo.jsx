import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function NavLogo() {
  return (
    <Box  >
      <Link  to='/'><Text
                    fontFamily={'Red Rose'}
                    fontWeight={'bold'} 
                    fontSize={['14px','14px','18px','18px']} 
                    paddingLeft={{base:'30px', sm:'60px'}} >
        SchlBox
      </Text></Link>
    </Box>
  )
}