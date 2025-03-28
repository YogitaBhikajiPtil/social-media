import axios from "axios";
export const FETCH_POSTS= "FETCH_POSTS";
export const CREATE_POST="CREATE_POST";
export const LIKE_POST="LIKE_POST";
export const UNLIKE_POST="UNLIKE_POST";
const FIREBASE_URL = "https://fir-9a142-default-rtdb.firebaseio.com/posts.json";

export const fetchPosts =()=> async (dispatch)=>{
    try{
        const response = await axios.get(FIREBASE_URL);
        const data=response.data;
        
        const posts = data?Object.entries(data).map(([id,val])=>({id, ...val}))
        :[];
        dispatch({type:FETCH_POSTS,payload:posts});
    }
    catch(error){
        console.error("Error Fetching Posts",error);
    }
}

 export const createPost =(postData) =>async(dispatch)=>{
    try{
        const response = axios.post(FIREBASE_URL,{
            ...postData,
            likes:{},
            comments:{},
        });
        dispatch({
            type:CREATE_POST,
            payload:{id:(await response).data.name,...postData},
        });
    } catch (error){
        console.error("Error creating post",error);
    }
};


export const likePost = (postId,userId) =>async(dispatch)=>{
    try{
        await axios.patch(`https://fir-9a142-default-rtdb.firebaseio.com/posts/${postId}/likes.json`,{
            [userId]:true
        })
        dispatch({type:LIKE_POST,payload:{postId,userId}})
    }
    catch(error){
        console.error("error liking post:",error)
    }
}

export const unlikePost = (postId,userId) =>async(dispatch)=>{
    try{
        await axios.patch(`https://fir-9a142-default-rtdb.firebaseio.com/posts/${postId}/likes.json`,{
            [userId]:false,
        })
        dispatch({type:UNLIKE_POST,payload:{postId,userId}})
    }
    catch(error){
        console.error("error unliking post:",error)
    }
}
