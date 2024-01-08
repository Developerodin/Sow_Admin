import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Box, Button, Typography } from '@mui/material';

export const CategoriesCard = ({Data}) => {
  return (
    <Box sx={{border:"0.5px dashed grey",borderRadius:"5px",padding:"20px",height:"150px"}}>
        
        <Box>
            <Box>
                <Typography sx={{fontSize:"25px"}}>{Data.name}</Typography>
            </Box>

            <Box>
                <Typography sx={{fontSize:"18px"}}>Sub-categories : {Data.subCatNo}</Typography>
            </Box>
        </Box>

    <Box sx={{display:"flex",justifyContent:"right",alignItems:"center",marginTop:"15px"}}>
      <Button variant='contained' size='small' expand sx={{backgroundColor:"black"}}>View</Button>
    </Box>

</Box>
  )
}
