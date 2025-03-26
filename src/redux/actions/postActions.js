import axios from "axios";
export const FETCH_POSTS= "FETCH_POSTS";
export const CREATE_POST="CREATE_POSTS"
const FIREBASE_URL = "https://fir-9a142-default-rtdb.firebaseio.com/posts.json";

export const fetch_posts =()=> async (dispatch)=>{
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

