import { fetch_posts } from '../redux/actions/postActions';
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
      dispatch(fetch_posts());
    }, [])

    const handlePost=()=>{
      if(postText.trim()){
        const postData = {
          text:postText,
          userEmail:posts.email,
          userId:posts.id,
        };
      dispatch(createPost({postData}));
      }
    }

  return (
    <>
   <VStack>
      <HStack gap={4}>
          <Input placeholder="write a post here..."
           value={postText}
           onChange={(e)=>setPostText(e.target.value)}
           size="md"
           />
           <Button colorPalette={"blue"} onClick={handlePost}>Post</Button>
      </HStack>
      {posts.length>0 && posts.map((post) =>{
        return<PostCard post={post} key={post.id}/>;
      })}
    </VStack>
    </>
  )
}

export default Dashboard;