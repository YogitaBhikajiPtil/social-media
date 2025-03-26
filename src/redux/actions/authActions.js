import {auth} from "/src/firebase/firebaseConfig.js"
import { createUserWithEmailAndPassword, signInWithCredential, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGN_OUT = "SIGN_OUT";
export const SIGNIN_SUCCESS = "SIGN_IN";

export const signin = (email,password,navigate) =>async(dispatch)=>{
    try{
        const userCredentials= await signInWithEmailAndPassword(auth,email,password);
        dispatch({type:SIGNIN_SUCCESS,payload:userCredentials.user});
        navigate("/")
    }
    catch(error){
        console.log("Signin error:",error)
    }
} 

export const signup = (email,password) =>async (dispatch) =>{
    try{
        const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password 
        );

        const user = userCredentials.user;
        dispatch({type:SIGNUP_SUCCESS,payload:user});
    } catch (error) {
        console.error("Signup Error:",error);
    }
};

export const signout=()=>async(dispatch)=>{
    try{
        await signOut(auth);
    dispatch({type:SIGN_OUT, payload: "User signed out successfully"});
    }
    catch(error){
        console.error("Signout error:",error)
    }
};

