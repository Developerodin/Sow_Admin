import React from 'react'
import { KTCard } from '../../../../../_metronic/helpers'
import { styled } from '@mui/system';
import { Box, Button, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';

import AddUser from './AddUser';
import UserFilter from './UserFilter';

const MyBox = styled('Button')({
    width:'100%',
    color: 'white',
    backgroundColor: 'crimson',
    padding: 8,
    borderRadius: 4,
    border:"none"
  });


const UserHeader = ({setUpdate,handleSearchInputChange,searchInput,handelActiveFilter,handelInActiveFilter,handelAllUsers}) => {
  return (
    <KTCard>
        <Box    justifyContent={"space-between"} p={"10px"} display='flex' sx={{display:{xs:"block",sm:"flex",md:"flex",lg:"flex",xl:"flex"}, alignItems:"center"}} >

            <Box display={'flex'}    sx={{width:{xs:"100%",md:"45%",lg:"45%",xl:"30%"}}}>
           
      


<Box sx={{display:{xs:"none",md:"flex",lg:"flex",xl:"flex"},justifyContent:"space-between"}} >
<Button onClick={handelAllUsers}  sx={{backgroundColor:"grey","&:hover": { backgroundColor: "orange"},marginRight:2}} variant="contained" >All</Button>
<Button onClick={handelActiveFilter}  sx={{backgroundColor:"grey","&:hover": { backgroundColor: "green"},marginRight:2}} variant="contained" >Active</Button>
<Button onClick={handelInActiveFilter}  sx={{backgroundColor:"grey","&:hover": { backgroundColor: "#E21818"},marginRight:2}} variant="contained" >InActive</Button>
</Box>

            
            </Box>
            
            {/* ===================================================================== */}
            

            <Box display={'flex'}   justifyContent={"space-evenly"} alignItems={"center"} sx={{width:{xs:"100%",md:"45%",lg:"45%",xl:"45%"}}}>

            <Box sx={{display:"flex", width:"40%"}}>
            {/* <TextField fullWidth label="Search" /> */}
            
            <TextField
         label="Search"
         id="outlined-start-adornment"
         size='small'
         sx={{ m: 1, width: '100%' }}
         InputProps={{
           startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
         }}
         onChange={handleSearchInputChange}
        value={searchInput}
        />
            </Box>


            <Box sx={{display:"flex", alignItems:"center",width:"40%",justifyContent:"space-evenly"}}>

                <UserFilter/>
               
            
            
                {/* <IconButton aria-label="Download" color="primary">
                <CloudDownloadIcon  fontSize='large'/> 
                 </IconButton> */}
           
                 <Box sx={{ marginLeft:"10px", display:'flex', alignItems:"center"}}>
            <Typography sx={{color:"gray",marginTop:"5px",display:{xs:"none",sm:"none",md:"none",lg:"none",xl:"block"}}}variant="subtitle1" component="h6">Add EV Owner</Typography>
            <IconButton  ><AddUser setUpdate={setUpdate}/></IconButton>
           
            </Box>
            </Box>

            
            
            </Box>




           
        </Box>
        </KTCard>
    
  )
}

export default UserHeader
