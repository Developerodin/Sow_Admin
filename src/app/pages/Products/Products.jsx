import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ThemColor } from '../../Them/ThemColor'
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { GenralTabel } from '../../TabelComponents/GenralTable';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';
import { AddCircle } from '@mui/icons-material';
import { Base_url } from '../../Config/BaseUrl';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
const column = [
  { name: "Name" },
  {name: "Category"},
  {name: "Price"},
  {name:"Stock Quantity"},
  { name: "Created At" },
  { name: "Action" },
  { name: "Delete" },
];

export const Products = () => {

  const navigate = useNavigate();
  const [rows,setrows] = useState([])
  const [productData,setproductData] = useState([])
  const[update,setupdate] = useState(0)
  const handelViewClick=()=>{
    navigate("/product_view");
  }

  const handelAddNew=()=>{
    navigate("/add_product");
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${Base_url}api/product`);

      if (response.status === 200) {
        const fetchedProduct = response.data;
        setproductData(fetchedProduct);
        const FormatedData = fetchedProduct.map((el,index)=>({
          "Name":el.name,
          "Category": el.category ? el.category.name : "no category assigned",
          "Price":el.price,
          "stock":el.stockQuantity,
          "CreatedAt":el.createdAt,
          "Status": el.status ? <Button color='success' variant="contained" >Active</Button> : <Button color='error' variant="contained">Inactive</Button>,
          "Action":<EditIcon onClick={()=>handelViewClick(el._id)} style={{ color: `${ThemColor.icon}` }} />,
          "Delete":<DeleteIcon color="error" onClick={()=>deleteProducts(el._id)} />
        }))
        setrows(FormatedData)
      } else {
        console.error('Error fetching categories:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const deleteProducts = async(ID) => {
    try{
      const res = await axios.delete(`${Base_url}api/product/${ID}`);
      console.log(res)
      setupdate((prev)=>prev+1)
    }
    catch(err){
      console.log("Error",err)
    }
  }


  useEffect(()=>{
    fetchProducts()
  },[update])
  
  return (
   <Box >

       <Card>
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Box>
            <Typography variant='h5' style={{fontWeight:600,letterSpacing:2}}>Products</Typography>
            </Box>

            <Box style={{width:"50%",hieght:"50px"}}>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={rows.map((option) => option.Name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search..."
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
            </Box>

            <Box>
            <Button
          variant="contained"
          style={{backgroundColor:`${ThemColor.buttons}`,marginRight:"15px"}}
          startIcon={<AddCircle />}
          onClick={handelAddNew}
        >
          Add Product
        </Button>
             
              <Button variant='contained' style={{backgroundColor:`${ThemColor.buttons}`}}>
                <TuneIcon />
              </Button>
            </Box>
           
          </Box>
        </CardContent>
       </Card>

       <Box style={{marginTop:"-2px"}}>
       
          <GenralTabel column={column} rows={rows} />
        
       </Box>
   </Box>
  )
}

