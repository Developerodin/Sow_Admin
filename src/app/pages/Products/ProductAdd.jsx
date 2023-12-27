
import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Box,
  CardContent,
  Card,
  Typography,
} from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { ThemColor } from '../../Them/ThemColor';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';
import { Base_url } from '../../Config/BaseUrl';
export const ProductAdd = () => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    image: '',
    price: '',
    description: '',
    category: '',
    stockQuantity:""
  });

  const [imageFile,setImageFile] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };
  
  
  const handleSubmit = async() => {
    console.log(productInfo);
    // try {
   
    //   const response = await axios.post(`${Base_url}api/product/`, productInfo);
    //   if (response.status === 201) {
    //     const newProduct = response.data;
    //     console.log('New product created:', newProduct);
    //     setProductInfo({
    //       title: '',
    //       image: '',
    //       price: '',
    //       description: '',
    //       category: '',
    //     })
    //     handelGoBack()
        
    //   } else {
      
    //     console.error('Error creating product:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error:', error.message);
    // }
  
    
  };

  const handelGoBack=()=>{
    window.history.back()
  }

  const handleFileChange3 = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div>
        <Card>
            <CardContent>
                <Box style={{marginBottom:"30px",display:"flex",alignItems:"center"}}>
                <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
                    <Typography variant='h6' style={{letterSpacing:1}}>
                    Add Product
                    </Typography>
                </Box>
            
   
   <Stack spacing={4}>
    
    {
                        imageFile && <div style={{display: "flex", alignItems: "center",justifyContent:"left" }}>
                        <div
                          style={{
                            width: "150px",
                            height: "150px",
                            border: "1px solid #ddd",
                            background: `url(${URL.createObjectURL(imageFile)}) center/cover no-repeat`,
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          
                        >
                         
                        </div>
                        </div>
                      }
    <TextField  type='file'   variant="outlined" onChange={handleFileChange3}  />
   
   <TextField
     label="Product Title"
     name="title"
     value={productInfo.title}
     onChange={handleInputChange}
     fullWidth
     required
   />

   <TextField
     label="Price"
     name="price"
     value={productInfo.price}
     onChange={handleInputChange}
     fullWidth
     required
   />
   <TextField
     label="Description"
     name="description"
     value={productInfo.description}
     onChange={handleInputChange}
     fullWidth
     multiline
     required
   />
   <FormControl fullWidth>
     <InputLabel>Select Category</InputLabel>
     <Select
       label="Select Category"
       name="category"
       value={productInfo.category}
       onChange={handleInputChange}
       required
     >
       <MenuItem value="Category 1">Category 1</MenuItem>
       <MenuItem value="Category 2">Category 2</MenuItem>
       <MenuItem value="Category 3">Category 3</MenuItem>
     </Select>
   </FormControl>
   
   </Stack>
 <Box style={{marginTop:"40px",display:"flex",justifyContent:"flex-end"}}>
 <Button
     variant="contained"
     style={{backgroundColor:`${ThemColor.buttons}`}}
     onClick={handleSubmit}
     size='large'
   >
     Add
   </Button>
 </Box>
            </CardContent>
        </Card>
      
    </div>
  );
};



