import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box 
        padding={['50px 20px','50px 20px','60px 50px','60px 50px']}
        width={'100%'} 
        color={'#ffffff'} 
        background={' rgb(37, 39, 41)'} 
        display={'flex'} 
        justifyContent={'space-between'}
        flexDirection={['column','column','row','row']}
        >
        <Box fontSize={['12px','14px','16px','16px']} marginTop={['30px','30px','0','0']}>
            <Heading fontSize={['16px','17px','18px','18px']}>About Us</Heading>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
        </Box>
        <Box fontSize={['12px','14px','16px','16px']} marginTop={['30px','30px','0','0']}>
            <Text>Our Story.</Text>
            <Text>Our Leadership</Text>
            <Text>Thematic Program Areas</Text>
            <Text>Our Team</Text>
            <Text>Thought Leadership Council</Text>
            <Text>For Teachers</Text>
            <Text>For Parents</Text>
            <Text>Testimony</Text>
            <Text>FAQS</Text>
        </Box>
        <Box fontSize={['12px','14px','16px','16px']} marginTop={['30px','30px','0','0']}>
            <Text>Our Story.</Text>
            <Text>Our Leadership</Text>
            <Text>Thematic Program Areas</Text>
            <Text>Our Team</Text>
            <Text>Thought Leadership Council</Text>
            <Text>For Teachers</Text>
            <Text>For Parents</Text>
            <Text>Testimony</Text>
            <Text>FAQS</Text>
        </Box>
    </Box>
  )
}

export default Footer