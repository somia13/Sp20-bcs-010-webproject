import { Box } from '@mui/system';
import React from 'react'
import HomeCover from './Images/HomeCover.jpg'

const HomePage = () => {
    return ( <>
    <Box style={{backgroundImage:`url(${HomeCover})`,height:'850px',backgroundSize:'cover',marginTop:'10px'}} >

    </Box>
    
    </> );
}
 
export default HomePage;