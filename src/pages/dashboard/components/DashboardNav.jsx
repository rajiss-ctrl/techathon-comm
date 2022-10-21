import { Box, Button, Image, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaSearch, FaUserAltSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ProfileUpdate from './ProfileUpdate'

const DashboardNav = (
                    { data,
                      setData,
                      file,
                      setFile,
                      showModal,
                      handleProfileUpdate,
                      profileImg,
                      handleProfileImage,
                      setPerc,
                      perc
                    }) => {


  return (
    <Box>
      
        <Box 
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        padding={['0 20px 0 50px','0 20px 0 50px','0 20px','0 20px']}
        height={'70px'}
        boxShadow='rgb(9, 140, 255) 0px 5px 15px'  rounded='md' bg='white'
        width={'100%'}
          >
          <Box 
              display={'flex'}
              alignItems={'center'}
              width={['150px','150px','300px','300px']}
              position={'relative'}
              >
            <Input 
                type={'search'}
                width={'100%'}
                fontSize={['12px','14px','16px','16px']}
                placeholder='Search'
                outline={'none'}
                border={'1px solid'}
                borderColor={'blue'}
                />
            <Box 
            fontSize={['12px','14px','16px','16px']}  
            position={'absolute'} right={'8px'}><FaSearch /></Box>
          </Box>
          

          <Box marginLeft={['7px','7px','0','0']} position={'relative'} display={'flex'} gap={'15px'} alignItems={'center'}>

            <Box display={['none','none','block','block']}><Link to={'assignment'}>Assignment</Link></Box>
            {/* display model for pro update */}
            <Button 
                  backdropBlur={'none'} 
                  border={'none'}
                  fontSize={['12px','14px','16px','16px']}  
                  onClick={handleProfileUpdate}
                  >Update profile</Button>
            <Box 
                display={showModal ? 'none' : 'block'} 
                position={'absolute'} 
                zIndex={'1'} 
                top={'70px'} 
                right={'10px'}
                ><ProfileUpdate 
                            file={file} 
                            setFile={setFile} 
                            data={data} 
                            setData={setData} 
                            profileImg={profileImg}
                             handleProfileImage={handleProfileImage}
                             perc={perc}
                             setPerc={setPerc}
                             /></Box>
          <Box 
              width={'30px'}
              height={'30px'}
              borderRadius={'50%'}
              border={'1px solid'}
              boderColor={'blue'}
              display={'flex'}
              align={'center'}
          >
            {file ? <Image
                        width={'30px'}
                        height={'30px'}
                        borderRadius={'50%'} 
                        src={URL.createObjectURL(file)} 
                        alt='profile'/> : 
                        <Box fontSize={'28px'}><FaUserAltSlash/></Box>}
          </Box>
          </Box>
        </Box>
    </Box>

  )
}

export default DashboardNav