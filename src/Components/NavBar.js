import { Face3, } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import WebsiteLogo from './Images/WebsiteLogo.png';


const NavBar = () => {
    return ( <>
    
    <AppBar position='static' style={{backgroundColor:'whitesmoke'}} >
        <Toolbar style={{display:'flex',justifyContent:'space-between'}} >
            <Box style={{display:'flex',alignItems:'center'}}> 
        <img src={WebsiteLogo} alt="" style={{height:'100px'}} /> 
        <Typography> <Link to='/' style={{textDecoration:'none',color:'black'}} > Home  </Link> </Typography>
        </Box>
        <Box gap={3} style={{display:'flex'}} >
            
            <Typography> <Link style={{textDecoration:'none',color:'black'}} to='/ContactUs' > Contact Us  </Link> </Typography>
            <Typography > <Link style={{textDecoration:'none',color:'black'}} >  Items </Link> </Typography>
          
        </Box>
        
        <Box>
            <Link style={{color:'black'}} to='/Login' > <Face3 style={{fontSize:'45px'}} /> </Link>
        </Box>
        </Toolbar>
    </AppBar>

    
    </> );
}
 
export default NavBar;