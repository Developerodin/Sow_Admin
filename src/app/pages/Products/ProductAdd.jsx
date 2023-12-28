import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { ThemColor } from "../../Them/ThemColor";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { Base_url } from "../../Config/BaseUrl";
import Grid from "@mui/material/Grid";
export const ProductAdd = () => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stockQuantity: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [update,setupdate] = useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = async () => {
    console.log(productInfo,imageFile);
    const formData = new FormData();
    formData.append('name', productInfo.name);
    formData.append('description', productInfo.description);
    formData.append('price', productInfo.price);
    formData.append('category', productInfo.category);
    formData.append('stockQuantity', productInfo.stockQuantity);
    const ImageData=[imageFile]
ImageData.forEach((image, index) => {
  formData.append('images', image);
});
    
    try {

      const response = await axios.post(`${Base_url}api/product/`, formData);
      if (response.status === 201) {
        const newProduct = response.data;
        console.log('New product created:', newProduct);
        setProductInfo({
          name: '',
          image: '',
          price: '',
          description: '',
          category: '',
          stockQuantity:''
        })
        handelGoBack()

      } else {

        console.error('Error creating product:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handelGoBack = () => {
    window.history.back();
  };

  const handleFileChange3 = (e) => {
    setImageFile(e.target.files[0]);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${Base_url}api/category`);

      if (response.status === 200) {
        const fetchedCategories = response.data;
        setCategories(fetchedCategories);
      } else {
        console.error('Error fetching categories:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };


  useEffect(()=>{
    fetchCategories()
  },[update])

  return (
    <div>
      <Card>
        <CardContent>
          <Box
            style={{
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowBackIcon
              onClick={handelGoBack}
              style={{ marginRight: "20px", color: `${ThemColor.buttons}` }}
            />
            <Typography variant="h6" style={{ letterSpacing: 1 }}>
              Add Product
            </Typography>
          </Box>

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
                label="Product Title"
                name="name"
                value={productInfo.name}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Select Category</InputLabel>
                <Select
                  label="Select Category"
                  name="category"
                  value={productInfo.category}
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
            </Grid>

            <Grid item xs={4}>
              <TextField
                label="Price"
                name="price"
                value={productInfo.price}
                onChange={handleInputChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
              type="Number"
                label="Stock Quantity"
                name="stockQuantity"
                value={productInfo.stockQuantity}
                onChange={handleInputChange}
                fullWidth
                multiline
                required
              />
            </Grid>

            

            <Grid item xs={12}>
              <TextField
                label="Product description"
                name="description"
                value={productInfo.description}
                onChange={handleInputChange}
                fullWidth
                required
                multiline
                rows={7}
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
              Add
            </Button>
          </Box>
            </Grid>
          </Grid>

          
        </CardContent>
      </Card>
    </div>
  );
};
