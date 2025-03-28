import { SIGN_OUT, SIGNUP_SUCCESS,SIGNIN_SUCCESS } from "../actions/authActions";

const initState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
};

export const authReducer = (state = initState,actions) => {
    switch (actions.type) {
        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
            localStorage.setItem("user",JSON.stringify(actions.payload));
            return {...state,user:actions.payload}
        case SIGN_OUT:
            localStorage.removeItem("user");
            return { ...state,user:null };
        default:
            return state;
    };
} 