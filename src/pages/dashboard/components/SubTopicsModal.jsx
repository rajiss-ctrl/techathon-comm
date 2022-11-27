import { Box, List, ListIcon, ListItem } from '@chakra-ui/react'
import React from 'react'

const SubTopicsModal = ({item,show}) => {
  return (
    <Box  >
        <List>
            <ListItem><ListIcon/>{item?.subtopic01}</ListItem>
            <ListItem><ListIcon/>{item?.subtopic02}</ListItem>
            <ListItem><ListIcon/>{item?.subtopic03}</ListItem>
            <ListItem><ListIcon/>{item?.subtopic04}</ListItem>
        </List>
    </Box>
  )
}

export default SubTopicsModal
