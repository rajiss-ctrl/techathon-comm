import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from './component/HeroSection'
import ProgressCard from './component/ProgressCard'
import TableOfContent from './component/TableOfContent'
import Teechers from './component/Teechers'

const Home = ({isOpen,toggle}) => {


  return (
    <Box width={'100%'} >
       <Navbar isOpen={isOpen} toggle={toggle}/>
        <Box width={'100%'}  onClick={isOpen && toggle}>
            <HeroSection/>
            <TableOfContent/>
            <ProgressCard/>
            <Teechers/>
            <Footer/>
        </Box>
    </Box>
  )
}

export default Home