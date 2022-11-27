import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
// import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
import {  useUserAuth } from '../../context/AuthContext';
// import { useUserAuth } from '../context/UserAuthContext'


const Signup = ({isOpen,toggle}) => {
 
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

    async function handleSubmit(e){
      e.preventDefault()
       
    try {
      await signUp(email, password);
       navigate("/teacherdasboard");
    } catch (err) {
      setError(err.message);
    }
    }
  return (
    
    <Box width={'100%'} onClick={isOpen && toggle} >
    
        <Box marginTop={''} width={'100%'} >
<Flex width={['250px','400px','550px','600px']} flexDirection={'column'} alignItems={'center'} onSubmit={handleSubmit} as={'form'}>

            <Heading fontSize={'17px'}>REGISTER </Heading>
            {error && <Text fontSize={'14px'} color={'red'}>{error}</Text>}
            <FormControl width={'100%'}  isRequired mt={6}>
            <FormLabel>Email</FormLabel>
            <Input
                  width={'100%'}
                  focusBorderColor={'none'}
                  border={'none'}
                  borderBottom={'1px solid blue'} 
                  onChange={(e) => setEmail(e.target.value)} 
                  type="email" 
                  placeholder='Your Email' 
                  required/>
            </FormControl>
            <FormControl isRequired mt={6}>
            <FormLabel>Password</FormLabel>
            <Input
                width={'100%'}
                focusBorderColor={'none'}
                border={'none'}
                borderBottom={'1px solid blue'}   
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder='Password' 
                required
                />
            </FormControl>
            <Button width={['240px','400px','540px','100%']} fontFamily={'Red Rose'} _hover={'none'} color={'#FFFFFF'} marginTop={'25px'} background={'rgb(9, 140, 255)'}  type="submit">Regidter</Button>

    </Flex>
    </Box>
    </Box>
  )
}

export default Signup







// import { Box, Button,  Checkbox,  Container, Flex, FormControl, FormLabel, Input } frsom '@chakra-ui/react'
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Navbar from '../../components/navbar/Navbar'
// import {createUserWithEmailAndPassword} from 'firebase/auth';
// import { auth } from '../../firebase/firebase';
// import { setUser } from '../../feature/slices/SignupSlice'
// import { useNavigate } from 'react-router-dom';

// const Signup = ({isOpen,toggle}) => {

//   //access the redux store
//   const userInit = useSelector((state)=>state.setUser.value);
// console.log(userInit)
//   //update the store
//   const dispatch = useDispatch()

//   const navigate = useNavigate()


//  const errMsg = <p>Email or password already in use!</p>;

//   // const [userData,setUserData] = useState(userDetails)
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')
//   // const [student,setStudent] = useState(false)
//   // const [teacher,setTeacher] = useState(false)
//   const [cpwd,setCpwd] = useState('')
//   const [err,setErr] = useState('')
//   // const [isSubmit,setIsSubmit] =useState(false);

//   const handleSubmit = (e)=>{
//       e.preventDefault();

// // console.log(           dispatch(setUser({
// //           email,
// //            password,
// //             student,
// //         teacher
// //        })))


//    createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     console.log(user)
//           dispatch(setUser({
//           email:user.email,
//           password:user.password
//       }))
//     // ...
//   })
//   .catch((error) => {
//     // const errorCode = error.code;
//     const errorMessage = error.message;
//     {errorMessage && setErr(errMsg)}

//     {!error ?  navigate("/teacherdasboard"): navigate("/signup")}
  
//     console.log(errorMessage)
//     // ..
//   });

//   }

//   return (
//         <Box onClick={isOpen && toggle}>
//       <Navbar isOpen={isOpen} toggle={toggle}/>
    
//     <Container marginTop={'100px'} >
// <Flex flexDirection={'column'} alignItems={'center'} onSubmit={handleSubmit} as={'form'}>
//   Register to have access to our services
//   <FormControl isRequired mt={6}>
//   <FormLabel>Email</FormLabel>
//     <Input
//       type={'email'}
//       marginBottom={'15px'}
//       placeholder="Email"
//       name='email'
//       value={email}
//       size="lg"
//       onChange={(e)=>{setEmail(e.target.value)}}
//     />
//     </FormControl>
    
  
//     <FormControl isRequired mt={6}>
//     <FormLabel>Password</FormLabel>
//     <Input
//       type='password'
//       marginBottom={'15px'}
//       placeholder="Password"
//       name='password'
//       value={password}
//       size="lg"
//       onChange={(e)=>{setPassword(e.target.value)}}
//     />
//     </FormControl >
//     <FormControl isRequired mt={6}>
//     <FormLabel>Password</FormLabel>
//     <Input
//       type='password'
//       marginBottom={'15px'}
//       placeholder="confirmPswd"
//       name='confirmPswd'
//       value={cpwd}
//       size="lg"
//       onChange={(e)=>{setCpwd(e.target.value)}}
//     />
//     </FormControl>

//     <Box
//     width={'100%'}
//     marginBottom={'10px'} 
//     display={'flex'}
//     justifyContent={'space-between'}
//     flexDirection={['column','column','row','row']}
//     >
//       {/* <Checkbox 
//           type={'checkbox'}
//           name={'teacher'}
//           value={teacher}
//           onChange={(e)=>{setTeacher(e.target.checked)}}
//           >
//       Teacher
//     </Checkbox>

//       <Checkbox 
//             type={'checkbox'}
//             name={'student'}
//             value={student}
//             onChange={(e)=>{setStudent(e.target.checked)}}
//             >
//       Student
//     </Checkbox> */}
//     </Box>
//     <Box width="100%">
//       <Button background={'blue'} width={'23%'} type='submit'>
//         Register
//       </Button>
//     </Box>
// </Flex>

// <Box>{err}</Box>
//     </Container>
      
    
//     </Box>
//   )
// }

// export default Signup