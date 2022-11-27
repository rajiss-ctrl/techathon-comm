import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

import {  provider, useUserAuth } from '../../context/AuthContext';
import React, { useState} from 'react'
import { getAuth,signInWithPopup } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
// import { FaCheck, FaGoogle, FaInfoCircle, FaTimes } from 'react-icons/fa'


const Login = ({isOpen,toggle}) => {
  const { logIn } = useUserAuth();
  const navigate = useNavigate()
  const errMsg = <p>Network error or your input is incorrect!</p>;

  // const [userData,setUserData] = useState(userDetails)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [err,setError] = useState('')
  
  async function handleLogin(e){
   e.preventDefault()
       setError("");
    try {
      await logIn(email, password);
      navigate("/teacherdasboard");
    } catch (err) {
      setError(errMsg);
    }
    } 

async function handleGoogleSignin(){
  const auth= getAuth();
  try {
      await signInWithPopup(auth,provider);
      navigate("/teacherdasboard");
  } catch (err) {
      setError(errMsg);
  }
  } 

  return (
<Box width={'100%'} onClick={isOpen && toggle}>
    
<Box>
<Flex width={['250px','400px','550px','600px']} flexDirection={'column'} alignItems={'center'} onSubmit={handleLogin} as={'form'}>
  <Heading fontFamily={'Red Rose'} width={['100%','100%','100%','100%']} fontSize={'17px'}>Login To Dashboard</Heading>
<FormControl isRequired mt={6}>
<FormLabel>Email</FormLabel>
    <Input
      width={'100%'}
      focusBorderColor={'none'}
      border={'none'}
      borderBottom={'1px solid blue'}
      type={'email'}
      marginBottom={'15px'}
      placeholder="Email"
      name='email'
      value={email}
      size="lg"
      onChange={(e)=>{setEmail(e.target.value)}}
    />
</FormControl>
<FormControl isRequired mt={6}>
<FormLabel>Password</FormLabel>
    <Input
      width={'100%'}
      focusBorderColor={'none'}
      border={'none'}
      borderBottom={'1px solid blue'}
      type='password'
      marginBottom={'15px'}
      placeholder="Password"
      name='password'
      value={password}
      size="lg"
      onChange={(e)=>{setPassword(e.target.value)}}
    />
</FormControl >
  
    <Box marginTop={['20px','0','0','0']} width="100%" display={'flex'} justifyContent={['space-evenly']} flexDirection={['column','column','row','row']} gap={'10px'}>
      <Button color={'#fff'} fontFamily={'Red Rose'} _hover={'none'}    background={'rgb(9, 140, 255)'} width={['250px','100%','30%','30%']} type='submit'>
        Login
      </Button>
      <Button fontFamily={'Red Rose'} _hover={'none'}  width={['250px','100%','23%','25%']} display={'flex'} gap={'5px'} color={'green'} background={'black'} onClick={handleGoogleSignin}>
        <Text fontSize={'15px'}>Google Sign In</Text>  
        <Box fontSize={'18px'} color={'red'}> <FaGoogle/></Box>
      </Button>
      <Button fontFamily={'Red Rose'} _hover={'none'}  width={['250px','100%','23%','23%']}  color={'black'} background={'transparent'}>
        <Text>Forgot Password ?</Text>
      </Button>
    </Box>
</Flex>
<Box marginTop={'14px'} color={'red'} fontSize={'14px'}>{err}</Box>
    </Box>
    </Box>
  )
}

export default Login;
