import { Box, Button, Flex, Heading, Input, List, ListItem, Table, TableCaption, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import React, { useState,useEffect} from 'react'
import { useUserAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase/firebase';


const Assignment = () => {
  
  const [weeklycurriculum,setWeeklycurriculum] = useState('');
  const [asgnmt,setAsgnmt] = useState('');

  const { user } = useUserAuth();

const handleSchemeInput = (e)=>{
  e.preventDefault()
  // const id = e.target.id;
     // setValues({...values, [e.target.name]: e.target.value})
     //get user inputs
     const {name,value} = e.target
     setWeeklycurriculum({...weeklycurriculum,[name]: value})
  // const value = e.target.value;

  // setWeeklycurriculum({...weeklycurriculum,[id]: value})
}

const handleSchemeSubmit = async(e) =>{
  e.preventDefault()

  try{
      // using user id as collection name and the weeklycurriculum level input as document
    await setDoc(doc(db, user.uid, weeklycurriculum.level),{
      ...weeklycurriculum,
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
      <Heading fontSize={'15px'} margin={'10px 0 10px 0'}>WEEKLY CURRICULUM</Heading>
        <Box  >
    <Flex onSubmit={handleSchemeSubmit} width={'40%'} flexDirection={'column'} gap={'10px'} as={'form'}>
        <Input 
              type={'text'} 
              name={'level'}
              value={weeklycurriculum.level} 
              onChange={handleSchemeInput} 
              placeholder='Enter Week'/>
         <Box display={'flex'} gap={'8px'}>
            <Input 
            type={'text'} 
            onChange={handleSchemeInput}
            name={'topic'} 
            value={weeklycurriculum.topic}
            placeholder='Topic for the Week'/> 
        </Box>
        <Box display={'flex'} gap={'8px'}>
            <Input 
            type={'text'} 
            onChange={handleSchemeInput}
            name={'subtopic01'}
            value={weeklycurriculum.subtopic01} 
            placeholder='Topic List'/> 
        </Box>
        <Box display={'flex'} gap={'8px'}>
            <Input 
            type={'text'} 
            onChange={handleSchemeInput}
            name={'subtopic02'}
            value={weeklycurriculum.subtopic02} 
            placeholder='Topic List'/> 
        </Box>
        <Box display={'flex'} gap={'8px'}>
            <Input 
            type={'text'} 
            onChange={handleSchemeInput}
            name={'subtopic03'}
            value={weeklycurriculum.subtopic03} 
            placeholder='Topic List'/> 
        </Box>
        <Box display={'flex'} gap={'8px'}>
            <Input 
            type={'text'} 
            onChange={handleSchemeInput}
            name={'subtopic04'}
            value={weeklycurriculum.subtopic04} 
            placeholder='Topic List'/> 
        </Box>
        <Box display={'flex'} gap={'8px'}>
            <Input 
            type={'text'} 
            onChange={handleSchemeInput}
            name={'subtopic05'}
            value={weeklycurriculum.subtopic05} 
            placeholder='Topic List'/> 
        </Box>
    </Flex>
    <Box margin={'10px 0 10px 0'}>
      <Button fontFamily={'Red Rose'} _hover={'none'} background={'blue'} color={'#FFFFFF'} onClick={handleSchemeSubmit} type='submit'>Submit</Button>
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
                <Button fontFamily={'Red Rose'} _hover={'none'} background={'blue'} color={'#FFFFFF'} type={'submit'}>Submit</Button>
              </Box>
      </Box>
       </Box>
    </>
  )
}

export default Assignment