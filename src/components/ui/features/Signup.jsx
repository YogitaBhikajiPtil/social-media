import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { VStack } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { signup } from '@/redux/actions/authActions';

const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSignup= () =>{
    dispatch(signup(email,password));
  }
  return (
    <Flex h="90vh" justify={"center"} align={"center"}>
    <VStack
    w={"50%"}
    gap={"4"}
    border="1px solid grey"
    p={5}
    borderRadius={"md"}>
        <Input type="text"
         placeholder="enter email"
         value = {email}
         onChange={(e) => setEmail(e.target.value)} 
        /> 
        <Input type="password"
         placeholder="enter Password"
         value = {password}
         onChange={(e) => setPassword(e.target.value)}  
        /> 
        <button onClick={handleSignup}>Sign Up</button>
    </VStack>
    </Flex>
  )
}

export default Signup