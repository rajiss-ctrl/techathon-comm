import { background, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import {FaCloudUploadAlt} from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { setDoc,doc, serverTimestamp } from 'firebase/firestore'
import { auth, db, storage } from '../../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useUserAuth } from '../../../context/AuthContext'
import {ref, uploadBytesResumable,getDownloadURL} from 'firebase/storage'

const ProfileUpdate = ({perc,setPerc}) => {
const currentUser={email: 'd@gmail.com'}

const [data,setData] =useState('')
const [file,setFile] =useState('')
// const user = {email:"g@gmail.com", password:"123456"}
const { user } = useUserAuth();


const handleInput = (e)=>{
  e.preventDefault()
  const id = e.target.id;
  // const value = currentUser.email === e.target.value || 
  // currentUser.password  === e.target.value
  //  ? currentUser.email : e.target.value;
  const value = e.target.value;

  setData({...data,[id]: value})
}

console.log(data)

// const  user = localStorage.getItem(JSON.parse('user'));
// const currUser = JSON.parse(localStorage.getItem('user'))
// console.log(currUser)

const handleSubmit = async(e) =>{
  e.preventDefault()

  try{
  //  const res = await createUserWithEmailAndPassword(
  //     auth,
  //     data.email,
  //     data.password,
  //   )
    await setDoc(doc(db, "user", user.uid),{
      ...data,
      timeStamp:serverTimestamp(),
    })
  }catch(error){
      console.log(error)
    }
}



//useEffect for image
useEffect(() => {
  const uploadFile = ()=>{
const name = new Date().getTime() + file.name;
const storageRef = ref(storage, file.name);
console.log(storage)
const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed', 
  (snapshot) => {
       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setPerc(progress)
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      // console.log('File available at', downloadURL);
      setData((prev)=>({...prev, img: downloadURL}))
    });
  }
);
}
file && uploadFile()
}, [])
 console.log(file)
return (
    <Box >
      <Flex 
          width={['260px','300px','350px','400px']} 
          background={'#fff'} 
          boxShadow='rgb(9, 140, 255) 0px 5px 15px'  
          rounded='md' 
          flexDirection={'column'}
          justifyContent={'center'} 
          alignItems={'center'}  
          as={'form'}
          padding={'20px 0'}
          onSubmit={handleSubmit}
          >
        <Heading fontSize={'14px'} marginBottom={'30px'}>Update your profile</Heading>
        <Box  width={'100%'}>
          <FormControl paddingLeft={'20px'}  width={'45%'} >
          <FormLabel 
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-evenly'}
                  padding={'5px'}
                  htmlFor='file' 
                  width={'100px'} 
                  cursor={'pointer'} 
                  fontSize={'20px'} 
                  border={'1px solid blue'}><FaCloudUploadAlt/> Picture</FormLabel>
              <Input
              outline={'none'}
              border={'none'}
              id='file'
              display={'none'}
              onChange={e=>setFile(e.target.files[0])}
              type={'file'}
           />
        </FormControl>
        </Box>
        
        <Box display={'flex'} gap={'2%'}  alignItems={'center'} justifyContent={'center'}  >
          <FormControl  width={'45%'}>
          <FormLabel textAlign={'left'}>Full Name</FormLabel>
              <Input
              outline={'none'}
              border={'none'}
              borderColor={'blue'}
              borderBottom={'1px solid blue'}
              focusBorderColor={'none'}
              placeholder='John Doe'
              id='displayName'
              onChange={handleInput}
              type={'text'}
              />
        </FormControl>
          
          <FormControl  width={'45%'}>
          <FormLabel textAlign={'left'}>Username</FormLabel>
              <Input
              outline={'none'}
              border={'none'}
              borderColor={'blue'}
              borderBottom={'1px solid blue'}
              focusBorderColor={'none'}
              placeholder='John1oo'
              id='username'
              name={'firstname'}
              // value={fullname}
              type={'text'}
              onChange={handleInput}
        />
        </FormControl>
                
        </Box>

          <FormControl  width={'92%'}>
          <FormLabel textAlign={'left'}>Email</FormLabel>
              <Input
              outline={'none'}
              border={'none'}
              borderColor={'blue'}
              borderBottom={'1px solid blue'}
              focusBorderColor={'none'}
              placeholder={user ? user.email : 'Your Email'}
              id={user.email}
              type={'email'}
              disabled={user && user.email}
              onChange={!user && handleInput}
        />
        </FormControl>

          <FormControl  width={'92%'}>
          <FormLabel textAlign={'left'}>Phone</FormLabel>
              <Input
              outline={'none'}
              border={'none'}
              borderColor={'blue'}
              borderBottom={'1px solid blue'}
              focusBorderColor={'none'}
              placeholder='+234 703 869 9659 '
              id='phone'
              name={'phone'}
              type={'phone'}
              onChange={handleInput}
              />
        </FormControl>
          <FormControl  width={'92%'}>
          <FormLabel textAlign={'left'}>Course Teaching</FormLabel>
              <Input
              outline={'none'}
              border={'none'}
              borderColor={'blue'}
              borderBottom={'1px solid blue'}
              focusBorderColor={'none'}
              placeholder='Commerce'
              name={'course'}
              id='course'
              // value={fullname}
              type={'text'}
              onChange={handleInput}
              />
        </FormControl>
          {/* disable={perc !== null && perc < 100} */}
        <Button   margin={'20px'} color={'#fff'}  type={'submit'}>Update profile</Button>
      </Flex>
    </Box>
  )
}

export default ProfileUpdate