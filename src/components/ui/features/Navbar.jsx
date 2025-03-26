import React from 'react'
import { Flex,Button,Text,Box, Center} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from "/src/redux/actions/authActions.js";

const Navbar = () => {
   let user = useSelector(state=>state.auth.user);
   const dispatch=useDispatch();
   const handleLogout=()=>{
   dispatch(signout())
   }
  return (
    <Flex as="nav"
     bg="blue.500"
      color="white"
      justify={"space-between"}
      p={3}
      m={2}
      align={"Center"}>
        <Text>My Social Media App</Text>

{/* navigation links */}
        <Flex gap={4}>
            <Link to="/">Dashboard</Link>
            {!user && <Link to="/signup">Sign Up</Link>}
        </Flex>
        <Box>
            {user ? (
                <Flex gap={4}>
                    <Text>{user.email}</Text>
                    <Button onClick={handleLogout}>Log out</Button>
                </Flex>
            ):(
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
            )}
        </Box>
    </Flex>
  )
}

export default Navbar;

