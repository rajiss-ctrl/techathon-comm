import {Box, Heading, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaDoorOpen, FaHome, FaImage, FaLocationArrow, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Assignment from '../../assets/images/assignment.svg'
import Dashboard from '../../assets/images/classroom.svg'
import { useUserAuth } from '../../context/AuthContext'

const Sidebar = ({showModal,handleProfileUpdate,reduceList,handleSideBarToggle}) => {
    let navigate = useNavigate()
  
  const { logOut, user } = useUserAuth();

  async function handleLogout(){

     try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }



  return (
    <VStack
          onClick={!showModal && handleProfileUpdate}           
          flex={ 
            [reduceList ? '2' : '.2',
            reduceList ? '2' : '.1',
            reduceList ? '1' : '.3',
            reduceList ? '1' : '.2']} 
            width={[reduceList ? '160px' : '40px',reduceList ? '200px' : '40px']}
          background={'rgb(9, 140, 255)'}
          color={'#fff'}
          height={'700px'}
          position={['absolute','absolute','relative','relative']}
          top={'0'}
          left={'0'}
          zIndex={'1'}
          >
          <Heading 
                fontSize={[reduceList ? '11px' : '6px',
                          reduceList ? '14px' : '8px',
                          reduceList ? '17px' : '6px',
                          reduceList ? '17px' : '6px']}
                          padding={['5px','5','0','0']} 
                marginTop={'20px'}
                ><Link to='/'>SchlBox</Link></Heading>
     <Box 
          onClick={handleSideBarToggle} 
          display={'flex'} 
          cursor={'pointer'} 
          alignItems={'center'} 
          padding={'0 5px'} 
          justifyContent={reduceList ? 'right' : 'left'} 
          background={'#fff'} 
          width={'80%'} 
          height={'40px'} 
          borderLeftRadius={'15px'} 
          color={'blue'} 
          position={'absolute'} 
          right={'-1px'} 
          top={'100px'}>
       <Text 
          // fontSize={reduceList ? '16px' : '9px'}
          fontSize={[reduceList ? '11px' : '10px',
          reduceList ? '11px' : '10px',
          reduceList ? '11px' : '11px',
          reduceList ? '17px' : '12px']} 
          paddingRight={'5px'}
          display={[reduceList ? 'block' : 'none',
                    reduceList ? 'block' : 'none',
                    reduceList ? 'block' : 'none',
                    reduceList ? 'block' : 'none',
                  ]}
          >Menu</Text><Box
                          fontSize={[reduceList ? '13px' : '11px',
                          reduceList ? '14px' : '12px',
                          reduceList ? '17px' : '12px',
                          reduceList ? '17px' : '12px']}
                ><FaDoorOpen/></Box>
     </Box>
      <Box 
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100vh'}
          >
        <List display={'flex'} flexDirection={'column'} gap={'40px'}>
          <Link to="/"
                ><ListItem 
                    display={'flex'}
                    gap={'5px'} 
                    alignItems={'center'}
                    ><Box color={'pink'}
                          fontSize={[reduceList ? '13px' : '11px',
                          reduceList ? '14px' : '13px',
                          reduceList ? '25px' : '12px',
                          reduceList ? '25px' : '12px']}
                          >
                      <FaHome/>
                      </Box><Box fontFamily={'Red Rose'} display={ reduceList ? 'block' : 'none'}>Home</Box></ListItem>
          </Link>
          <Link to="/teacherdasboard"
                ><ListItem 
                    display={'flex'}
                    gap={'5px'} 
                    alignItems={'center'}
                    ><Box color={'green'}
                          fontSize={[reduceList ? '13px' : '11px',
                          reduceList ? '14px' : '13px',
                          reduceList ? '17px' : '12px',
                          reduceList ? '17px' : '12px']}
                          >
                      <Image src={Dashboard} alt='dashboard'/>
                      </Box><Box fontFamily={'Red Rose'} display={ reduceList ? 'block' : 'none'}>Dashboard</Box></ListItem>
          </Link>
          <Link to="/"
                ><ListItem 
                    display={'flex'}
                    gap={'5px'} 
                    alignItems={'center'}
                    ><Box color={'#000'}
                          fontSize={[reduceList ? '13px' : '11px',
                          reduceList ? '14px' : '13px',
                          reduceList ? '17px' : '12px',
                          reduceList ? '17px' : '12px']}
                          >
                      <Image src={Assignment} alt='assignment'/>
                      </Box><Box fontFamily={'Red Rose'} display={ reduceList ? 'block' : 'none'}>Assignment</Box></ListItem>
          </Link>
          <Link to="/"
                ><ListItem 
                    display={'flex'}
                    gap={'5px'} 
                    alignItems={'center'}
                    ><Box color={'pink'}
                          fontSize={[reduceList ? '13px' : '11px',
                          reduceList ? '14px' : '13px',
                          reduceList ? '17px' : '12px',
                          reduceList ? '17px' : '12px']}
                          fontWeight={'300'}
                          >
                      <FaSignOutAlt/>
                      </Box><Box fontFamily={'Red Rose'} onClick={handleLogout} display={ reduceList ? 'block' : 'none'}>Logout</Box></ListItem>
          </Link>
        </List>
      </Box>
    </VStack>
  )
}

export default Sidebar