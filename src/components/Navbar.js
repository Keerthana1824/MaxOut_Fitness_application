import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from "../assets/images/Logo.png"
const Navbar = () => {
  return (
   <Stack
   direction={"row"}
   justifyContent="space-around" sx={{ gap: {sm: "222px", xs: "40px"}, justifyContent:"none"}}px="10px">
    
    <Link to = "/">
      <img  src={Logo} alt ="logo" width={"70px"} height={"70px"} style={{marginTop:"10px"}}/>          
    </Link>
    
   <Stack 
    mt="0px"
    direction={"row"} 
    gap = "60px"
    fontSize={"24px"}
    alignItems={"flex-end"}>
    <Link to ="/" style={{textDecoration:"none", color:"#3A1212", borderBottom:"2px solid #FF2625"}}>Home</Link>
    <a href = "exercises" style = {{textDecoration:"none", color:"#3A1212", borderBottom:"2px solid #FF2625"}}>Exercises</a>
   </Stack>
   </Stack>
   
  )
}

export default Navbar
