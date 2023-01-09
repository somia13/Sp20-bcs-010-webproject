
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import Register from './Images/Register.jpg'
const SignUp = () => {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
  

    
    return ( 
    <>

    <Box style={{backgroundImage:`url(${Register})`,backgroundSize:'cover',height:'500px',marginTop:'5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    
    <Box  style={{height:'280px',width:'300px',border:'1px solid black'}}>
     <Box style={{display:'flex',justifyContent:'center'}}>
      <Typography variant='h6'> Welcome To Our Register Page! </Typography>

     </Box>
     <Box style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
      <TextField
      value={email}
      type='email'
      variant='standard'
      placeholder='Type Your Email...'
      onChange={(e)=>setEmail(e.target.value)}
      />

     </Box>

     <Box style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
      <TextField
      value={name}
      variant='standard'
      placeholder='Type Your Name..'
      onChange={(e)=>setName(e.target.value)}
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
      
        <Button variant='contained' color='inherit'  style={{width:'75%'}} > Register </Button>
      

     </Box>
      <Box style={{display:'flex',justifyContent:'center',marginTop:'5px'}}>
      
        <Typography variant='body2'> <Link style={{textDecoration:'none',color:'black'}} to='/Login' > Need To Sign In? </Link> </Typography>
      

     </Box>
    </Box>

</Box>
    
    </> );
}
 
export default SignUp;