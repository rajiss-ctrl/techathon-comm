import { Box, Button, Container, Image, Text } from '@chakra-ui/react'
import TeecherLady from '../../../assets/images/teechaLADYONPC-removebg-preview.png'
import React from 'react'
import { FaImages } from 'react-icons/fa'

const Teechers = () => {
  return (
  <Box margin={'150px 0'}>    
    <Box   display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box 
            width={'80%'} 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            flexDirection={['column','column', 'row', 'row']} 
            height={['350px','500px','240px','240px']} 
            background={'rgb(9, 140, 255)'} 
            borderRadius={'35px'}
            gap={'20px'}
            position={['relative','relative','static','static']}
            >
            <Image 
                  src={TeecherLady} 
                  width={['50%','50%','35%','27%']} 
                  position={['absolute','absolute','static','static']} 
                  alt=""
                  top={'-50px'}
                  />
            <Box marginTop={['40%','40%','0','0']} textAlign={['center','center','left','left']}>
                <Text fontSize={['12px','14px','16px','16px']} fontWeight={'bold'}  marginBottom={'30px'} color={'#fff'}>Join the educative conversations on
                    <br/>our discussion forum</Text>
                    <Button fontSize={['12px','12px','16px','16px']} background={'#fff'} borderRadius={'20px'} color={'blue'} >Class Notes Now</Button>
            </Box>
        </Box>
    </Box>
  </Box>

  )
}

export default Teechers