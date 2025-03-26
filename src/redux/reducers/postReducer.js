import { FETCH_POSTS } from "../actions/postActions";
import { CREATE_POST } from "../actions/postActions";
const initState = {posts: [] };

export const postReducer = (state=initState,action) =>{
    switch (action.type) {
        case FETCH_POSTS:
            return {...state,posts:action.payload};
        case CREATE_POST:
            return{...state,posts:[action.payload,...state.posts]};
            default:
                return state;
    }
}