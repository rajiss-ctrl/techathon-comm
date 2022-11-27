import { Box, Button,  Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import HeroVideo from '../../../assets/video/herovideo.mp4';

const HeroSection = () => {
  return (
    <Box
         background={'#098cff'}
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'}
        height={{base:'350px', sm:'800px'}}
        padding={{base:'0 15px', sm:'0 30px'}} 
        position={'relative'}
        width={'100%'}
        overflow={'hidden'}
        >
          <Box
              position={'absolute'}
              top={'0'}
              left={'0'}
              right={'0'}
              bottom={'0'}
              width={'100%'}
              height={'100%'}
              // overflow={'hidden'}
                >
         <video  
            src={HeroVideo} 
            autoPlay loop muted 
            type={'video/mp4'}
            style={{ opacity: '0.9',
            mixBlendMode: 'multiply', 
            OObjectFit:'cover',
            height:'100%', width:'100%', ObjectFit:'cover'}}
          >
          </video>
          </Box>
          <Box 
              // padding={{base:'0', md:'0 10%',sm:'0 25%'}}
              padding={['0 2%', '0 2%', '0', '1% 12%']}  
              display={'flex'} 
              position={'relative'} 
              justifyContent={'center'} 
              flexDirection={'column'} 
              alignItems={'center'}>
            <Heading
                    fontWeight={'700'}
                    fontFamily={'Red Rose'} 
                    textAlign={'center'} 
                    fontSize={['10px', '22px', '35px', '40px']}
                    color={'#fff'}
                    padding={['0 2%', '0 2%', '1% 2%', '1% 12%']}
                    >TAKE CONTROL OF EDUCATIONAL SCHEDULES AND TODO'S ANYTIME, ANY WHERE.</Heading>
            <Text 
                  fontFamily={'Red Rose'}
                  fontWeight={'400'}
                  textAlign={'center'}
                  fontSize={['8px', '14px', '16px', '18px']} 
                  padding={['0 2%', '0 3%', '1% 26%', '1% 26%']} 
                  color={'#fff'}
                  >Super simple time mangement, self studying, peer to peer collaborative
                  learning both for teachers and students</Text>

                  <Box marginTop={{base:'15px', sm:'20px'}}>
                    <Link to='/getstarted'><Button
                          _hover={'none'}
                          fontFamily={'Red Rose'}
                          fontWeight={'400'} 
                          width={['80px', '100px','120px', '120px']}
                          height={{base:'32px', sm:'40px'}} 
                          fontSize={['12px', '12px','14px', '16px']}
                          focusBorder={'none'}
                          focusBorderColor={'none'}
                          background={'#ffffff'}
                          color={'#000000'}
                          >Get Started</Button></Link>
                  </Box>
          </Box>
    </Box>
  )
}

export default HeroSection

//229, 243, 255