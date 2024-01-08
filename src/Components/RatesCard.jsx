import React from 'react'
import { Box, Button, Typography } from '@mui/material';
export const RatesCard = ({name}) => {
  return (
    <Box sx={{border:"0.5px dashed grey",borderRadius:"5px",padding:"20px"}}>
        
    <Box>
        <Box>
            <Typography sx={{fontSize:"25px"}}>{name}: ₹ 420 </Typography>
        </Box>

       
    </Box>

<Box sx={{display:"flex",justifyContent:"right",alignItems:"center",marginTop:"10px"}}>
  <Button variant='contained' size='small' expand sx={{backgroundColor:"black"}}>Edit</Button>
</Box>

</Box>
  )
}
