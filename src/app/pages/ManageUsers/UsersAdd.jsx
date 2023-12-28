
import { Box, Button, Card, CardContent, Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useNavigate } from 'react-router-dom';
import { BASE_URL, Base_url } from '../../Config/BaseUrl';
import axios from 'axios';
import Grid from "@mui/material/Grid";
export const UsersAdd = () => {
    const navigate = useNavigate();
    const [Formdata,setFormData] =  useState({
      "name":"",
      "gender":"",
      "email":"",
      "password":"",
      "confirmPassword":"",
      "mobile":"",
      "dob":"",
      "Address":"",
      "city":"",
      "pincode":"",
      "country":"",
    })
    const [imageFile, setImageFile] = useState(null);
  const handelGoBack=()=>{
    window.history.back()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...Formdata, [name]: value });
  };
  const handleFileChange3 = (e) => {
    setImageFile(e.target.files[0]);
  };
  

  const handleSubmit = async () => {
    console.log(Formdata,imageFile);
//     const formData = new FormData();
//     formData.append('name', Formdata.name);
//     formData.append('description', Formdata.description);
//     formData.append('price', Formdata.price);
//     formData.append('category', Formdata.category);
//     formData.append('stockQuantity', Formdata.stockQuantity);
//     const ImageData=[imageFile]
// ImageData.forEach((image, index) => {
//   formData.append('images', image);
// });
    
//     try {

//       const response = await axios.post(`${Base_url}api/product/`, formData);
//       if (response.status === 201) {
//         const newProduct = response.data;
//         console.log('New product created:', newProduct);
//         setFormData({
//           name: '',
//           image: '',
//           price: '',
//           description: '',
//           category: '',
//           stockQuantity:''
//         })
//         handelGoBack()

//       } else {

//         console.error('Error creating product:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
  };
  return (
    <Box>
   

    <Box style={{marginTop:"30px"}}>
    <Card>
          <CardContent>
          <Box style={{display:"flex",alignItems:"center"}}>
              <ArrowBackIcon onClick={handelGoBack}  style={{marginRight:"20px",color:`${ThemColor.buttons}`}}/>
            <Typography variant='h6' style={{letterSpacing:1}}>Add new users</Typography>
            </Box>
    
            <Box style={{marginTop:"20px"}}>
            {imageFile && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    marginBottom:"10px"
                  }}
                >
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "1px solid #ddd",
                      background: `url(${URL.createObjectURL(
                        imageFile
                      )}) center/cover no-repeat`,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></div>
                </div>
              )}
            <Grid container spacing={2}>
            <Grid item xs={4}>
            
              <TextField
                type="file"
                variant="outlined"
                onChange={handleFileChange3}
                fullWidth
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Name"
                name="name"
                value={Formdata.name}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>

            {/* <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Select Category</InputLabel>
                <Select
                  label="Select Category"
                  name="category"
                  value={Formdata.category}
                  onChange={handleInputChange}
                  required
                >
                  {
                    categories.map((el,index)=>{
                          return  <MenuItem key={index} value={el._id}>{el.name}</MenuItem>
                    })
                  }
                 
                  
                </Select>
              </FormControl>
            </Grid> */}

            <Grid item xs={4}>
              <TextField
                label="Gender"
                name="gender"
                value={Formdata.gender}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
              type="Eamil"
                label="email"
                name="email"
                value={Formdata.email}
                onChange={handleInputChange}
                fullWidth
                multiline
                required
              />
            </Grid>

            

            <Grid item xs={4}>
              <TextField
                label="Password"
                name="password"
                value={Formdata.password}
                onChange={handleInputChange}
                fullWidth
                required
               
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                value={Formdata.confirmPassword}
                onChange={handleInputChange}
                fullWidth
                required
               
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Mobile"
                name="mobile"
                value={Formdata.mobile}
                onChange={handleInputChange}
                fullWidth
                required
                
              />
            </Grid>


            <Grid item xs={4}>
              <TextField
                label="D O B"
                name="dob"
                value={Formdata.dob}
                onChange={handleInputChange}
                fullWidth
                required
                
              />
            </Grid>


            <Grid item xs={4}>
              <TextField
                label="Address"
                name="Address"
                value={Formdata.Address}
                onChange={handleInputChange}
                fullWidth
                required
               
              />
            </Grid>


            <Grid item xs={4}>
              <TextField
                label="City"
                name="city"
                value={Formdata.city}
                onChange={handleInputChange}
                fullWidth
                required
               
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Pincode"
                name="pincode"
                value={Formdata.pincode}
                onChange={handleInputChange}
                fullWidth
                required
               
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Country"
                name="country"
                value={Formdata.country}
                onChange={handleInputChange}
                fullWidth
                required
               
              />
            </Grid>

            <Grid item xs={12}>
            <Box
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: `${ThemColor.buttons}` }}
              onClick={handleSubmit}
              size="large"
            >
              Submit
            </Button>
          </Box>
            </Grid>
          </Grid>
            </Box>
            
    
          
          </CardContent>
        </Card>
    </Box>
       
    
       </Box>
  )
}
