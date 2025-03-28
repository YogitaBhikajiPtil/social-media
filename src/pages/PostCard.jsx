import React from 'react'
import {Box,Text,Flex,Button} from "@chakra-ui/react"
import { FaHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { likePost } from '@/redux/actions/postActions'

const PostCard = ({post}) => {
  // const posts=useSelector((state)=>state.posts.posts);
  const user=useSelector((state)=>state.auth.user);
  const dispatch=useDispatch();

  const handleLikes=()=>{

    if(post.likes?.user?.uid){
      dispatch(unlikePost(post.id,user.uid))
    }
    dispatch(likePost(post.id,user.uid))
  }

  return (
    <Box p={4} border={"1px solid gray"} borderRadius={"md"} bg={"gray.100"} w="50%">
        <Text fontweight={"bold"} color={"blue.400"}>{post.userEmail}</Text>
        <Text>{post.text}</Text>
        <Flex>
          <Button color={post.likes?.[user?.uid]?"red":"gray"} 
          bg="transparent" onClick={handleLikes}>
              <FaHeart/>
              {Object.keys(post.likes||{}).length}
          </Button>
        </Flex>
    </Box>
  )
}

export default PostCard