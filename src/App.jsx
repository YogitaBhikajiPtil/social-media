import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Signup from './components/ui/features/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/ui/features/Navbar';
import Login from './components/ui/features/Login';
const App = () => {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
     </Routes>
    </>
  );
};  

export default App;
