import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaSign, FaSignInAlt } from 'react-icons/fa'
import Navbar from '../components/navbar/Navbar'
import Login from './login/Login'
import Signup from './register/Signup'

const GetStarted = ({isOpen,toggle}) => {
    const [showLogin, setShowLogin]=useState(true)
  
    const renderLoginPage =()=>{
        setShowLogin(!showLogin)
    }

  return (
    <Box width={'100%'} height={'100%'}  >
        <Navbar  isOpen={isOpen} toggle={toggle}/>
        <Box onClick={isOpen && toggle} padding={['0 20px','30px','0 25%','0 27%']} width={'100%'} height={'60%'}  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Box width={'100%'}textAlign={'center'} margin={'100px 0px'}>
                 {!showLogin ? 
                <Button onClick={ renderLoginPage } fontFamily={'Red Rose'} _hover={'none'}  background={'green'} color={'#ffffff'}><FaSignInAlt/> Login</Button> :
                <Button onClick={renderLoginPage} fontFamily={'Red Rose'} _hover={'none'}   background={'blue'} color={'purple'} ><FaSign/> Sign Up</Button>}
            </Box>
            <Box width={['100%','100%','40%','40%']} display={'grid'} placeContent={'center'}>
                {showLogin ? <Login/>  : <Signup/>}
            </Box>
        </Box>
    </Box>
  )
}

export default GetStarted