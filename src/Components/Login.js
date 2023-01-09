import { Button, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import HairSaloonLogin from './Images/HairSaloonLogin.jpg'
import {useState} from 'react'
import { Link } from 'react-router-dom';
const Login = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return ( 
    
    <>
    
<Box style={{backgroundImage:`url(${HairSaloonLogin})`,backgroundSize:'cover',height:'500px',marginTop:'5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    
    <Box  style={{height:'230px',width:'300px' ,backgroundColor:'#D8D8D8'  }}>
     <Box style={{display:'flex',justifyContent:'center'}}>
      <Typography variant='h6'> Welcome To Our Login Page! </Typography>

     </Box>
     <Box style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
      <TextField
      value={email}
      variant='standard'
      placeholder='Type Your Email...'
      onChange={(e)=>setEmail(e.target.value)}
      />

     </Box>

     <Box style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
      <TextField
      value={password}
      variant='standard'
      placeholder='Type Your Password..'
      onChange={(e)=>setPassword(e.target.value)}
      />

     </Box>

     <Box style={{display:'flex',justifyContent:'center',marginTop:'17px'}}>
      
        <Button variant='contained' color='inherit'  style={{width:'75%'}} > Login </Button>
      

     </Box>
      <Box style={{display:'flex',justifyContent:'center',marginTop:'5px'}}>
      
        <Typography variant='body2'> <Link style={{textDecoration:'none',color:'black'}} to='/SignUp' > Need To Register An Account? </Link> </Typography>
      

     </Box>
    </Box>

</Box>
    
    </>  );
}
 
export default Login;