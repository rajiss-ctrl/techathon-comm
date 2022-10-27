import { Flex} from '@chakra-ui/react'
import NavMenuItem from './components/NavMenuItem'


const Navbar = ({isOpen,toggle}) => {

  return (
        <>
          <Flex 
              onClick={isOpen && toggle}
               width={'100%'} 
               justifyContent={'space-between'} 
               height={{base:'auto', sm:'60px'}}
               alignItems={{base:'baseline', sm:'center'}}
               background={'rgb(9, 140, 255)'}
               color={'#fff'}
               position={'fixed'}
               zIndex={'1'}
               top={'0'}
               left={'0'}
               paddingTop={['0', '50px', '0', '0']}
               paddingBottom={['20px', '50px', '0', '0']}
               >
                <NavMenuItem toggle={toggle} isOpen={isOpen}/>
          </Flex>
        </>
  )
}

export default Navbar