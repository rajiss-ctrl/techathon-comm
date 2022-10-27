import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Courses = ({isOpen,toggle}) => {
  return (
    <Box>
        <Navbar isOpen={isOpen} toggle={toggle}/>
        <Box height={'100vh'} onClick={isOpen && toggle}>
          <Text marginTop={'80px'}>Heelllo</Text>
        </Box>
    </Box>
  )
}

export default Courses