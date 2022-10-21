import { Box,Button,Flex,Heading,TableCaption,Text } from '@chakra-ui/react'
import React,{useContext, useState} from 'react'
import { FaMarkdown, FaTimes } from 'react-icons/fa'
import { useUserAuth } from '../../../context/AuthContext'
import { UserDetailsContext } from '../../../context/UserDetailsContext'
import SubTopicsModal from './SubTopicsModal'

const Topics = ({dataDetails}) => {
  const { user } = useUserAuth();
  const {userDataDetails} = useContext(UserDetailsContext)
console.log(userDataDetails)

  const [subtopic,setSubtopic] = useState(true)

  const handleSubTopicModal =()=>{
  setSubtopic(!subtopic)
}
  return (
    <>
     {/* list of topics and progress */}

    <Box padding={'20px'}>
      <Text display={'flex'} paddingLeft={['30px','30px','0','0']}><pre>Course : </pre>{ userDataDetails.map((item)=>{ return <div key={item.id}>
                      <di>{user.uid === item.id && <Box>{item.course}</Box> }</di>
                </div>}) }</Text>
<Box width={'100%'}  >
    {/* <TableCaption  fontSize={'20px'}>Coriculum</TableCaption> */}
  
      <Flex width={'100%'} justifyContent={'space-between'} marginBottom={'15px'}>
        <Box ><Heading fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']}>LEVEL</Heading></Box>
        <Box><Heading fontSize={['12px','14px','16px','16px']} >TOPICS</Heading></Box>
        <Box > <Heading fontSize={['12px','14px','16px','16px']} >UPDATES</Heading></Box>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS I</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'} >Introduction to commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS II</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'} >Introduction to commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS III</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'}>Intro ductionto commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS III</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'}>Intro ductionto commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS III</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'}>Intro ductionto commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS III</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'}>Intro ductionto commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS III</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'}>Intro ductionto commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS III</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'}>Intro ductionto commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
      <Flex width={'100%'} justifyContent={'space-between'}>
        <Text fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>SS III</Text>
        <Text fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'}>Intro ductionto commerce</Text>
        <Text fontSize={['12px','14px','16px','16px']} ><Button><FaMarkdown/></Button><Button><FaTimes/></Button></Text>
      </Flex>
  </Box>
</Box>

    </>
  )
}

export default Topics