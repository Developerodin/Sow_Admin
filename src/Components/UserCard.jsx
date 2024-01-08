import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ListIcon from '@mui/icons-material/List';
export const UserCard = () => {
  return (
    <Card sx={{borderRadius:"5px"}}>
        <CardContent>
        <Box >
        
        <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
         <Box sx={{marginRight:"20px"}}>
             <img style={{width:"50px",height:"50px",border:"1px solid grey",borderRadius:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" alt='img'/>
         </Box>
     
         <Box>
             <Typography sx={{fontSize:"20px"}}>Vishaka Shekhawat</Typography>
             <Typography sx={{fontSize:"14px",color:"#8A8A8A",marginTop:"5px"}}>Content Creater : <span style={{color:"#fff",width:"50px",height:"50px",background:"#2E8760",padding:"3px",fontSize:"10px"}}> Online</span></Typography>
             <Typography style={{color:"#2E8760",fontSize:"12px",marginTop:"5px"}}>Logged in Since 8:30 | 23 Sep 2023</Typography>
         </Box>
        </Box>
     
        <Box sx={{display:"flex",justifyContent:"left",alignItems:"center",marginTop:"20px",marginLeft:"10px"}}>
            <AccessTimeIcon sx={{marginRight:"10px", color:"#8A8A8A"}}/>
         <Typography sx={{color:"#8A8A8A"}}>Joined 23-09-2023</Typography>
        </Box>
     
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"10px",marginLeft:"10px"}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <ListIcon sx={{color:"crimson"}}/>
     
                <Typography sx={{fontSize:"14px",marginLeft:"10px"}}>Assigned <span style={{color:"crimson"}}>966</span></Typography>
            </Box>
     
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <ListIcon sx={{color:"#2E8760"}}/>
     
                <Typography sx={{fontSize:"14px",marginLeft:"10px"}}>Completed  <span style={{color:"#2E8760"}}>852</span></Typography>
            </Box>
        </Box>
     
     <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}}>
       <Button variant='contained' size='large' expand sx={{backgroundColor:"black"}}>View</Button>
     </Box>
     
           </Box>
        </CardContent>
    </Card>
   
  )
}
