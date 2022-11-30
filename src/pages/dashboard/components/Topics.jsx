import { Box,Button,Flex,Heading,ListItem,OrderedList,Spinner,TableCaption,Text } from '@chakra-ui/react'
import { collection, getDocs } from 'firebase/firestore'
import React,{useContext, useState,useEffect} from 'react'
import { FaEdit, FaMarkdown, FaTimes, FaTrash } from 'react-icons/fa'
import { useUserAuth } from '../../../context/AuthContext'
import { UserDetailsContext } from '../../../context/UserDetailsContext'
import { db } from '../../../firebase/firebase'
import SubTopicsModal from './SubTopicsModal'

const Topics = ({dataDetails}) => {
const [curriculum, setCurriculum] = useState(null);
const [show,setShow] = useState(-1)


//dropdown
const showOption = (index)=>{
    if(index === show){
      setShow(-1)
      return
    }
     setShow(index)
  }

  
   //feching from usercollections
useEffect(()=>{
 const fetchData = async ()=>{
  let list = []
  try {
    //  user id as collection name and fetch it it
  const querySnapshot = await getDocs(collection(db,user.uid));
  querySnapshot.forEach((doc)=>{
    console.log(doc)
    list.push({id:doc.id,...doc.data()})
  });
  setCurriculum(list)
  } catch (error) {
    console.log(error)
  }

 }
 fetchData()
},[])
console.log(curriculum)

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
      <Text display={'flex'} paddingLeft={['30px','30px','0','0']}>{ userDataDetails.map((item)=>{ return <div key={item.id}>
                      <di>{user.uid === item.id && <Heading fontSize={'16px'} display={'flex'} justifyContent={'center'} alignItems={'center'}><Box fontFamily={'Red Rose'}><Heading fontSize={'18px'} color={'blue'} paddingRight={'5px'}>Course : </Heading></Box>{item.course}</Heading> }</di>
                </div>}) }</Text>
    <Box width={'100%'}  >
      <Flex width={'100%'} justifyContent={'space-between'} marginBottom={'15px'}>
        <Box ><Heading fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']}>WEEK</Heading></Box>
        <Box><Heading fontFamily={'Red Rose'} fontSize={['12px','14px','16px','16px']} >TOPICS</Heading></Box>
        <Box > <Heading fontFamily={'Red Rose'} fontSize={['12px','14px','16px','16px']} >UPDATES</Heading></Box>
      </Flex>
      {
        !curriculum ? <Box color={'blue'} textAlign={'center'} fontSize={'80px'}><Spinner/></Box> 
        :
        <OrderedList>
        { 
        curriculum?.map((item,index)=>{
          console.log(index)
          return (
        <ListItem onClick={()=>showOption(index)} key={item.id}  cursor={'pointer'} borderRadius={'5px'} paddingRight={show === index && '10px'} paddingLeft={'10px'} border={'1px solid'} borderColor={'#d2cefdf5'} marginBottom={'10px'}>
        <Flex  borderBottom={show === index && '2px solid #d2cefdf5'} width={'100%'} alignItems={'center'} justifyContent={'space-between'}>
        <Text  fontFamily={'Red Rose'} fontSize={['12px','14px','16px','16px']} paddingLeft={['30px','30px','0','0']} width={'30%'}>{item.level}</Text>
        <Text  fontFamily={'Red Rose'} fontSize={['12px','14px','16px','16px']} width={'40%'} textAlign={'left'} >{item.topic}</Text>
        <Text fontFamily={'Red Rose'}  fontSize={['12px','14px','16px','16px']} ><Button color={'blue'}><FaEdit /></Button><Button color={'red'}><FaTrash/></Button></Text>
         </Flex>
        <Box display={show === index ? 'block' : 'none'}>
          <SubTopicsModal item={item}/>
        </Box>
      </ListItem>
          )
        })
        }
      </OrderedList>
      }
  </Box>
</Box>

    </>
  )
}

export default Topics