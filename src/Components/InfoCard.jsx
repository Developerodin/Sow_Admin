import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Box, Button, Typography } from '@mui/material';

export const InfoCard = ({name,phone,address}) => {
  return (
    <Box sx={{width:"330px",height:"276px",border:"0.5px dashed grey",borderRadius:"5px",padding:"20px"}}>
    <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
      <Box>
        <PersonIcon sx={{fontSize:"30px"}}/>
      </Box>
      <Box sx={{marginLeft:"10px"}}>
        <Typography sx={{fontSize:"17px"}}>{name}</Typography>
      </Box>
    </Box>

    <Box sx={{display:"flex",justifyContent:"left",alignItems:"center",marginTop:"15px"}}>
      <Box>
        <LocalPhoneIcon sx={{fontSize:"30px"}}/>
      </Box>
      <Box sx={{marginLeft:"10px"}}>
        <Typography sx={{fontSize:"17px"}}>{phone}</Typography>
      </Box>
    </Box>

    <Box sx={{display:"flex",justifyContent:"left",marginTop:"15px"}}>
      <Box>
        <FmdGoodIcon sx={{fontSize:"30px"}}/>
      </Box>
      <Box sx={{marginLeft:"10px"}}>
        <Typography sx={{fontSize:"17px"}}>{address}</Typography>
      </Box>
    </Box>

    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"25px"}}>
      <Button variant='contained' size='large' expand sx={{backgroundColor:"black"}}>View Details</Button>
    </Box>

</Box>
  )
}
