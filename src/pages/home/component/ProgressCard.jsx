import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ProgressCard = () => {
  return (
    <Box padding={'100px 0 100px 0 '} background={'rgb(229, 243, 255)'}>
        <Heading 
                margin={['0 0 20px 0','0 0 50px 0']} 
                fontSize={['12px','14px','16px','16px']} 
                textAlign={'center'}
                padding={['0 20px','0 20px','0 30px','0']}
                >Teecha gives you access to thousands of education contents suitable for both the Nigerian Student and Teacher</Heading>
        <Box 
            display={'flex'} 
            alignItems={'center'} 
            justifyContent={'center'} 
            gap={['20px','20px','10px','10px']}
            flexDirection={['column','column','row','row']}
            >
            <Box
                boxShadow='rgb(9, 140, 255) 0px 5px 15px'  rounded='md' bg='white' 
                width={['200px','200px','170px','220px']}
                height={['200px','200px','170px','220px']}  
                padding={'30px 0'} 
                display={'flex'} 
                alignItems={'center'} 
                justifyContent={'center'} 
                flexDirection={'column'}>
                <Box background={'rgb(9, 140, 255)'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} width={'80px'} height={'80px'}>
                <Text color={'#fff'} >5m+</Text>
                </Box>
                <Text fontSize={['12px','12px','12px','14px']} padding={'0 10px'} textAlign={'center'}>Lifetime learner who have learnt with Teecher.com</Text>
            </Box>
            <Box 
                boxShadow='rgb(9, 140, 255) 0px 5px 15px'  
                rounded='md' 
                bg='white'
                width={['200px','200px','170px','220px']}
                height={['200px','200px','170px','220px']}  
                padding={'30px 0'} 
                display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                    <Box background={'rgb(9, 140, 255)'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} width={'80px'} height={'80px'}>
                    <Text color={'#fff'} >5m+</Text>
                    </Box>
                    <Text fontSize={['12px','12px','12px','14px']} padding={'0 10px'} textAlign={'center'}>Seek Career advice on teecher</Text>
            </Box>
            <Box 
                boxShadow='rgb(9, 140, 255) 0px 5px 15px'  
                rounded='md' 
                bg='white'
                width={['200px','200px','170px','220px']}
                height={['200px','200px','170px','220px']}   
                padding={'30px 0'} 
                display={'flex'} 
                alignItems={'center'} 
                justifyContent={'center'} flexDirection={'column'}>
                <Box background={'rgb(9, 140, 255)'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} width={'80px'} height={'80px'}>
                        <Text color={'#fff'} >5m+</Text>
                </Box>
                <Text fontSize={['12px','12px','12px','14px']} padding={'0 10px'} textAlign={'center'}>Improvement in academic performance</Text>
            </Box>
            <Box 
                boxShadow='rgb(9, 140, 255) 0px 5px 15px' 
                rounded='md' 
                bg='white'
                width={['200px','200px','170px','220px']}
                height={['200px','200px','170px','220px']}  
                padding={'30px 0'} 
                display={'flex'} 
                alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
                <Box background={'rgb(9, 140, 255)'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} width={'80px'} height={'80px'}>
                    <Text color={'#fff'} >5m+</Text>
                </Box>
                <Text fontSize={['12px','12px','12px','14px']} padding={'0 10px'} textAlign={'center'}>Messages exchanged daily across all learning platform</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default ProgressCard