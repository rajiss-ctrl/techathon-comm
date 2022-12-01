import { 
    Box,
    Heading,
    Button,
    Text,
  } from '@chakra-ui/react'
import {FaAccessibleIcon, FaExpand, FaLink, FaMarkdown, FaMarker, FaPen, FaSchool, FaSearch, FaTasks, FaTimes} from 'react-icons/fa'
import React, { useEffect, useState,useContext } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Link, Outlet } from 'react-router-dom'
import ProfileUpdate from './components/ProfileUpdate'
import DashboardNav from './components/DashboardNav'
import Topics from './components/Topics'
import { useUserAuth } from '../../context/AuthContext'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { db, storage } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { UserDetailsContext, useUserDetails } from '../../context/UserDetailsContext'

const TeacherDashboard = ({handleSideBarToggle,reduceList}) => {
const { user } = useUserAuth();

const {userDataDetails} = useContext(UserDetailsContext)
console.log(userDataDetails)
const Greet =()=>{
  return(
    <>
{userDataDetails.map((i)=>{
  return (
   <div>
     {i.displayName && user.uid === i.id ? <Heading fontSize={'20px'}>Welcome {i.displayName}</Heading>
    : <Heading></Heading>
    }
   </div>
  )

})}
</>
  )
}

const [showModal,setShowModal] = useState(true)
const [profileImg,setProfileImg] =useState(true);
const [file,setFile] = useState('')
const [data,setData] = useState({})
const [dataDetails,setDataDetails] = useState([])
const [perc,setPerc] = useState(null)

const handleProfileUpdate =()=>{
  setShowModal(!showModal)
}


const handleProfileImage = ()=>{
  setProfileImg(!profileImg)
}



  return (
    <Box width={'100%'} display={'flex'} >
    <Sidebar showModal={showModal} handleProfileUpdate={handleProfileUpdate} reduceList={reduceList} handleSideBarToggle={handleSideBarToggle}/>

      <Box flex={'6'} onClick={reduceList && handleSideBarToggle} >
    <DashboardNav 
              profileImg={profileImg} 
              handleProfileImage={handleProfileImage} 
              data={data} 
              setData={setData} 
              file={file} 
              setFile={setFile} 
              showModal={showModal} 
              handleProfileUpdate={handleProfileUpdate}
              perc={perc}
              setPerc={setPerc}
              />
          
      <Box onClick={!showModal && handleProfileUpdate}>
         {/* { dataDetails.map((item)=>{  <div key={item.id}><Topics key={item.id} item={item}/></div> }) } */}
        <Heading 
                marginTop={['20px','0','0','0']} 
                padding={['40px 40px 40px 15px']} 
                textAlign={'center'} 
                fontSize={['12px','14px','16px','16px']}
                display={'flex'}
                color={'rgb(9, 140, 100)'}
                > <Text > <Greet/> 
                  {/* <Box>
                    
                    { userDataDetails?.map((item)=>{ 
                        return (
                        <Box key={item.id}>
                            {item.displayName && user.uid === item.id ?
                            <Text display={'flex'}>
                            <Box>{item.displayName}</Box> 
                            </Text> 
                            :
                            ""
                            } 
                        </Box> )}) } 
                        
                  </Box> */}
                    
                  </Text>
                   </Heading>
  
   <Topics dataDetails={dataDetails}/>
    <Box 
        display={'grid'} 
        placeContent={'center'}
        borderRadius={'10px'}
        marginBottom={'20px'}
        >
      <Link style={{
          textAlign:'center', 
          boxShadow:'rgb(9, 140, 255) 0px 5px 15px',
          background:'#fff',
          }} to={'assignment'}>
            <Button fontSize={['12px','14px','16px','16px']} display={'flex'} gap={'10px'} alignItems={'center'}><span>Scheme & Assignment</span> <FaPen/></Button>
      </Link>
    </Box>
          </Box>
    <Outlet/>

      </Box>
  </Box>
  )
}

export default TeacherDashboard