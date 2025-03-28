import { fetchPosts } from '../redux/actions/postActions';
import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VStack,Text,Input,HStack,Button} from '@chakra-ui/react';
import PostCard from './PostCard';
import { createPost } from '../redux/actions/postActions';

const Dashboard = () => {
    const [postText,setPostText] = useState("");
    const user = useSelector((state) =>state.auth.user);
    const posts = useSelector((state)=>state.posts.posts)
    console.log(user,posts);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchPosts());
    }, [])

    const handlePost=()=>{
      if(postText.trim()){
        const postData = {
          text:postText,
          userEmail:user.email,
          userId:user.uid,
        };
      dispatch(createPost(postData));
      }
    }

  return (
    <>
   <VStack gap={4} p={5}> 
    {user ? (
      <>
      <HStack gap={4} border={"1px solid gray"} borderRadius={"md"} w="50%">
          <Input placeholder="write a post here..."
           value={postText}
           onChange={(e)=>setPostText(e.target.value)}
           size="md"
           />
           <Button colorPalette={"blue"} onClick={handlePost}>Post</Button>
      </HStack>
      {posts.length>0 && posts.map((post) =>{
        return <PostCard post={post} key={post.id}/>;
      })}
      </>
    ): (
      <Text>Please log in to see posts.</Text>)
      }
    </VStack>
    </>
  )
}

export default Dashboard;