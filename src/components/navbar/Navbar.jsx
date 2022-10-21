import { Flex,  Image, WrapItem, Box, Wrap, Heading, List, ListItem,chakra} from '@chakra-ui/react'
import React, { useState } from 'react'
import { MenuToggle } from './components/MenuToggle'
import NavMenuItem from './components/NavMenuItem'


const Navbar = ({isOpen,toggle}) => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => setIsOpen(!isOpen)
  return (
        <>
          <Flex 
              onClick={isOpen && toggle}
               width={'100%'} 
               justifyContent={'space-between'} 
               height={{base:'auto', sm:'60px'}}
               alignItems={{base:'baseline', sm:'center'}}
               background={'rgb(9, 140, 255)'}
               padding={{base:'20px 0 30px 0', sm:'10px 0'}} 
               color={'#fff'}
               position={'fixed'}
               zIndex={'1'}
               top={'0'}
               left={'0'}
               paddingTop={['0', '50px', '0', '0']}
               paddingBottom={['0', '50px', '0', '0']}
               >
                <NavMenuItem toggle={toggle} isOpen={isOpen}/>
                </Flex>
        </>

  )
}

export default Navbar