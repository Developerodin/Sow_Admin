import { Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
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
const column = [
  { name: "ID" },
  { name: "Name" },
  {name: "Category"},
  {name: "Price"},
  { name: "Created At" },
  { name: "Action" },
  { name: "Delete" },
];

export const Products = () => {

  const navigate = useNavigate();
  const handelViewClick=()=>{
    navigate("/product_view");
  }

  const handelAddNew=()=>{
    navigate("/add_product");
  }

  const rows = [
    { Id: "1", Name: "News Paper", Category: "Normal Recycler", Price: "₹ 14", CreatedAt: "04/Oct/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "2", Name: "Sofa", Category: "Furniture", Price: "₹ 3000", CreatedAt: "18/Jul/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "3", Name: "Laptop", Category: "Electronics", Price: "₹ 45000", CreatedAt: "22/Mar/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "4", Name: "Coffee Maker", Category: "Appliances", Price: "₹ 2000", CreatedAt: "09/Sep/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "5", Name: "Smartphone", Category: "Electronics", Price: "₹ 25000", CreatedAt: "11/Nov/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "6", Name: "Tablet", Category: "Electronics", Price: "₹ 15000", CreatedAt: "03/Aug/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "7", Name: "Chair", Category: "Furniture", Price: "₹ 1500", CreatedAt: "14/Feb/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "8", Name: "Toaster", Category: "Appliances", Price: "₹ 1000", CreatedAt: "27/May/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "9", Name: "Pen", Category: "Stationery", Price: "₹ 20", CreatedAt: "06/Jan/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "10", Name: "TV", Category: "Electronics", Price: "₹ 35000", CreatedAt: "29/Apr/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "11", Name: "Blender", Category: "Appliances", Price: "₹ 1200", CreatedAt: "17/Jun/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
    { Id: "12", Name: "Book", Category: "Stationery", Price: "₹ 50", CreatedAt: "01/Dec/2023", Action: <RemoveRedEyeIcon onClick={handelViewClick} style={{ color: `${ThemColor.icon}` }} />, Delete: <DeleteIcon color="error" /> },
  ];
  
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

