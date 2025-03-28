import { FETCH_POSTS } from "../actions/postActions";
import { CREATE_POST } from "../actions/postActions";
import { LIKE_POST } from "../actions/postActions";
import { UNLIKE_POST } from "../actions/postActions";
const initState = {posts: [], };

export const postReducer = (state=initState,action) =>{
    let updatedPosts;
    switch (action.type) {
        case FETCH_POSTS:
            return {...state,posts:action.payload};
        case CREATE_POST:
            return{...state,posts:[action.payload,...state.posts]};

        case LIKE_POST: 
           updatedPosts = state.posts.map((post)=>
                post.id ===action.payload.postId
            ? {
                ...post,
                likes: {...post.likes,[action.payload.userId]:true},
            }
            : post,
            );
           return{...state,posts:updatedPosts}

           case UNLIKE_POST: 
          updatedPosts = state.posts.map((post)=>
                 post.id ===action.payload.postId
             ? {
                 ...post,
                 likes: {...post.likes,[action.payload.userId]:false},
             }
             : post,
             );
            return{...state,posts:updatedPosts} 
            default:
                return state;
    }
}