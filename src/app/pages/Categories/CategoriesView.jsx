import { Box, Button, Card, CardContent, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Base_url } from '../../Config/BaseUrl';

export const CategoriesView = () => {
  const navigate = useNavigate();
  const [categoryData,setCategoriesData] = useState({
    name:"",
    description:""
  });
 const {id} = useParams()
  const handelGoBack=()=>{
    window.history.back()
  }
  const handelChange=(e)=>{
    const { name, value } = e.target;
    setCategoriesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

const getCategory = async()=>{
  try {
    const response = await axios.get(`${Base_url}api/category/${id}`);

    if (response.status === 200) {
      const fetchedCategories = response.data;
      setCategoriesData(fetchedCategories[0]);
    } else {
      console.error('Error fetching categories:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const handelSave =  async ()=>{
  try{
   const res = await axios.put(`${Base_url}api/category/${id}`,categoryData);
   setCategoriesData({
    name:"",
    description:""
   })
   handelGoBack()
  }
  catch(err){

  }
}

  useEffect(()=>{
    console.log("Id",id)
    getCategory();
  },[])
  return (
   <Box>
   

<Box style={{marginTop:"30px"}}>
<Card>
      <CardContent>
      <Box style={{display:"flex",alignItems:"center"}}>
          <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
        <Typography variant='h6' style={{letterSpacing:1}}>Update categorie</Typography>
        </Box>

        <Box style={{marginTop:"50px"}}>
        <Stack spacing={4}>
          <TextField   label="Name" variant="outlined" name='name' value={categoryData.name}  onChange={(e)=>handelChange(e)}/> 
          <TextareaAutosize minRows={5} style={{padding:"10px"}}  label="Description" name="description" value={categoryData.description} onChange={(e)=>handelChange(e)} variant="outlined"/>
        </Stack>
        </Box>
        

        <Box style={{marginTop:"50px",display:"flex",justifyContent:"flex-end"}}>
          <Button variant="contained" size='large' onClick={handelSave} style={{backgroundColor:`${ThemColor.buttons}`}}>Save</Button>
        </Box>
      
      </CardContent>
    </Card>
</Box>
   

   </Box>
  )
}
