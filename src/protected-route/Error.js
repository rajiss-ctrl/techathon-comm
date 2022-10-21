import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <Flex height={'80vh'} justifyContent={'center'} alignItems={'center'}>
      <Heading color={'red'} fontSize={'50px'}>The Page you request does not exist 404!!!</Heading>
    </Flex>
  )
}

export default Error