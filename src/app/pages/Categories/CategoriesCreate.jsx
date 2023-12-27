import { Box, Button, Card, CardContent, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from 'react-router-dom';
import { BASE_URL, Base_url } from '../../Config/BaseUrl';
import axios from 'axios';

export const CategoriesCreate = () => {
    const navigate = useNavigate();
    const [Formdata,setFormData] =  useState({
      "name":"",
      "description":"",
    })
   
  const handelGoBack=()=>{
    window.history.back()
  }

  const handelChange=(e)=>{
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const createCategory = async () => {
    try {
      // Send a POST request to the server to create a new category
      const response = await axios.post(`${Base_url}api/category/`, Formdata);

      // Check if the request was successful (status code 2xx)
      if (response.status === 201) {
        const newCategory = response.data;
        console.log('New category created:', newCategory);
        setFormData({
          "name":"",
          "description":"",
        })
        handelGoBack()
        
      } else {
        // Handle errors
        console.error('Error creating category:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  
  return (
    <Box>
   

    <Box style={{marginTop:"30px"}}>
    <Card>
          <CardContent>
          <Box style={{display:"flex",alignItems:"center"}}>
              <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
            <Typography variant='h6' style={{letterSpacing:1}}>Add new categorie</Typography>
            </Box>
    
            <Box style={{marginTop:"20px"}}>
            <Stack spacing={4}>
        
              <TextField   label="Name" variant="outlined" name='name' value={Formdata.name} onChange={(e)=>handelChange(e)} />
             
              <TextareaAutosize minRows={5} name='description' value={Formdata.description} onChange={(e)=>handelChange(e)}  label="Description" variant="outlined" placeholder='Description' style={{padding:"10px"}}/>
            </Stack>
            </Box>
            
    
            <Box style={{marginTop:"50px",display:"flex",justifyContent:"flex-end"}}>
              <Button variant="contained" size='large' style={{backgroundColor:`${ThemColor.buttons}`}} onClick={createCategory}>Save</Button>
            </Box>
          
          </CardContent>
        </Card>
    </Box>
       
    
       </Box>
  )
}
