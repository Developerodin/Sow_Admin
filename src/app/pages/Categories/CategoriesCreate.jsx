import { Box, Button, Card, CardContent, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import { ThemColor } from '../../Them/ThemColor'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from 'react-router-dom';

export const CategoriesCreate = () => {
    const navigate = useNavigate();
 
  const handelGoBack=()=>{
    window.history.back()
  }
  return (
    <Box>
   

    <Box style={{marginTop:"30px"}}>
    <Card>
          <CardContent>
          <Box style={{display:"flex",alignItems:"center"}}>
              <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
            <Typography variant='h5' style={{letterSpacing:4}}>ADD NEW CATEGORIE</Typography>
            </Box>
    
            <Box style={{marginTop:"20px"}}>
            <Stack spacing={4}>
            <Box style={{width:"300px",height:"150px"}}>
    <img style={{height:"100%",width:"100%",borderRadius:"20px"}} src="https://www.century21albania.com/vendor/core/images/default-image.jpg" alt="img" />

    </Box>
            <TextField  type='file'   variant="outlined" />
              <TextField   label="Name" variant="outlined" />
             
              <TextareaAutosize minRows={15}  label="Description" variant="outlined"/>
            </Stack>
            </Box>
            
    
            <Box style={{marginTop:"50px",display:"flex",justifyContent:"flex-end"}}>
              <Button variant="contained" size='large' style={{backgroundColor:`${ThemColor.buttons}`}}>Save</Button>
            </Box>
          
          </CardContent>
        </Card>
    </Box>
       
    
       </Box>
  )
}
