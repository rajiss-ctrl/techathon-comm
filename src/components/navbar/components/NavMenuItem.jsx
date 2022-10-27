import { Box, Flex, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import NavLogo from './NavLogo'
import { Link } from 'react-router-dom'
import { MenuToggle } from './MenuToggle'


const NavMenuItem = ({toggle, isOpen }) => {
  return (
    <Flex
      marginBottom={'8px'}
      padding={{base:'30px 0 0 0', sm:'0 60px 0 0'}}
      as="nav"
      alignItems={'center'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
      width={'100%'}
    >
        <Box width={'200px'}>
          <NavLogo toggle={toggle}/>
        </Box>

        <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
          <MenuToggle toggle={toggle} isOpen={isOpen}/>
        </Box>

        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
        <List
          onClick={toggle}
          display={'flex'}
          alignItems={'center'}
          justifyContent={['center', 'space-between', 'flex-end', 'flex-end']}
          flexDirection={['column', 'row', 'row', 'row']}
          paddingLeft={['0', '60px', '0', '0']}
          pt={[4, 4, 0, 0]}
        >
            <ListItem padding={{base:'0 0 30px 0', sm:'0 15px 0 0'}}>How It Work</ListItem>
            <Link to='/courses'><ListItem padding={{base:'0 0 30px 0', sm:'0 15px 0 0'}}>Courses</ListItem></Link>
            <Link to='/teacherdasboard'><ListItem padding={{base:'0 0 30px 0', sm:'0 15px 0 0'}}>Dashboard</ListItem></Link>
            <Link  to='/getstarted'><ListItem padding={{base:'0 0 30px 0', sm:'0 15px 0 0'}}>Get Started</ListItem></Link>
        </List>
      </Box>
    </Flex>
  )
}

export default NavMenuItem