import { Box, Button, Flex, Heading, Input, List, ListItem, Table, TableCaption, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState,useEffect} from 'react'
import { useUserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase/firebase';


const Assignment = () => {
  
  const [scheme,setScheme] = useState('');
  const [asgnmt,setAsgnmt] = useState('');

  const { user } = useUserAuth();

const handleSchemeInput = (e)=>{
  e.preventDefault()
  const id = e.target.id;
  // const value = currentUser.email === e.target.value || 
  // currentUser.password  === e.target.value
  //  ? currentUser.email : e.target.value;
  const value = e.target.value;

  setScheme({...scheme,[id]: value})
}

const handleSchemeSubmit = async(e) =>{
  e.preventDefault()

  try{

    await setDoc(doc(db, "scheme", user.uid),{
      ...scheme,
      timeStamp:serverTimestamp(),
    })
  }catch(error){
      console.log(error)
    }
}


const assignment = (e)=>{
  e.preventDefault()
  const id = e.target.id;
  // const value = currentUser.email === e.target.value || 
  // currentUser.password  === e.target.value
  //  ? currentUser.email : e.target.value;
  const value = e.target.value;

  setAsgnmt({...asgnmt,[id]: value})
}


const handleAssgnmnt = async(e) =>{
  e.preventDefault()

  try{
  //  const res = await createUserWithEmailAndPassword(
  //     auth,
  //     data.email,
  //     data.password,
  //   )
    await setDoc(doc(db, "question", user.uid),{
      ...asgnmt,
      timeStamp:serverTimestamp(),
    })
  }catch(error){
      console.log(error)
    }
}




  return (
    <>
        <Box padding={'20px'}>
      <Heading fontSize={'15px'} margin={'10px 0 10px 0'}>SCHEME OF WORK</Heading>
        <Box  >
    <Flex onSubmit={handleSchemeSubmit} width={'40%'} flexDirection={'column'} gap={'10px'} as={'form'}>
        <Input 
              type={'text'} 
              id={'level'} 
              onChange={handleSchemeInput} 
              placeholder='e.g SSS III'/>
         <Box display={'flex'} gap={'8px'}>
            <Input 
            type={'text'} 
            onChange={handleSchemeInput}
            id={'topic'} 
            placeholder='Topics'/> 
        </Box>
    </Flex>
    <Box margin={'10px 0 10px 0'}>
      <Button onClick={handleSchemeSubmit} type='submit'>Submit</Button>
    </Box>
    </Box>
    <hr style={{marginBottom:'40px'}}/>

      <Heading  fontSize={'15px'} margin={'10px 0 10px 0'} >ASSIGNMENT</Heading>
      <Box onSubmit={handleAssgnmnt} width={'100%'} as={'form'}>
        <Input 
              type={'text'} 
              marginBottom={'20px'}
              id="qstopic"   
              placeholder="Question's Topic Area"
              onChange={assignment}/>
        <Textarea  
              id="question"
              placeholder='Question' 
              onChange={assignment}
              ></Textarea>
              <Box margin={'10px 0 10px 0'}>
                <Button  type={'submit'}>Submit</Button>
              </Box>
      </Box>
       </Box>
    </>
  )
}

export default Assignment