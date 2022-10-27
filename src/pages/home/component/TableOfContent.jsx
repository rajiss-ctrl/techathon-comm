import { Box, Heading, HStack, Image, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import ContentImg from '../../../assets/images/teechaCONTENTIMG.png'

const TableOfContent = () => {
  return (
    <Box 
          width={'100%'} 
          padding={{base:'70px 30px', md:'70px 60px'}}
          display={'flex'} 
          flexDirection={['column','column','column','row']} 
          justifyContent={'spaceBetween'} 
          alignItems={'center'}
          >
          <Box 
              width={['100%','100%','100%','33.33%']}  
              display={'grid'}
              placeContent={'center'}
              padding={['0','0','0',' 0 3.5px 0 0']}
              >
            <Heading fontSize={['14px','14px','16px','16px']}>Access to all Class Notes & Assignments</Heading>
            <Text>SchlBox gives you access to all the subjects from JSS1 to SS3</Text>
        </Box>
        <Box 
            width={['100%','100%','100%','33.33%']} 
            background={'white'} 
            // shadow={'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}
            display={'grid'} 
            placeContent={'center'}
            padding={'20px 0'}
            >
            <Image width={'100%'} margin={'0 auto'}  src={ContentImg} alt='teacher'/>
        </Box>
            <Box 
                  // width={{base:'100%', md:'33.33%'}} 
                  width={['100%','100%','100%','33%']}
                  display={'grid'}
                  placeContent={'center'}
                  fontSize={['12px','12px','16px','16px']}
                  >
  <Table width={'100%'}  >
    <TableCaption  fontSize={'20px'}>Coriculum</TableCaption>
    <Thead>
      <Tr >
        <Th >Levels</Th>
        <Th>Subjects</Th>
        <Th>Topics</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Jss I</Td>
        <Td>English</Td>
        <Td >drop </Td>
      </Tr>
      <Tr>
        <Td>Jss II</Td>
        <Td>English</Td>
        <Td >drop </Td>
      </Tr>
      <Tr>
        <Td>Jss III</Td>
        <Td>English</Td>
        <Td >drop </Td>
      </Tr>
    </Tbody>

  </Table>
</Box>
    </Box>
  )
}

// box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


export default TableOfContent