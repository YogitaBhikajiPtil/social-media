import React from 'react'
import {Box,Text} from "@chakra-ui/react"

const PostCard = ({post}) => {
  return (
    <Box>
        <Text>{post.userEmail}</Text>
        <Text>{post.text}</Text>
    </Box>
  )
}

export default PostCard