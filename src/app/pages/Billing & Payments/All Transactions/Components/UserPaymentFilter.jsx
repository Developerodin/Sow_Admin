import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Divider, IconButton, Switch, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import ReplayIcon from '@mui/icons-material/Replay';
import { useFormik } from 'formik';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const UserPaymentFilter = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const initialValues={
  RestRoom:false,
  Cafe:false,
  Store:false,
 
}

const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
     initialValues:initialValues,
     onSubmit:(values,{resetForm}) => {
       console.log("🚀 ~ file: ChargerFilter.jsx:33 ~ ChargerFilter ~ values:", values)
        
       
       handleClose();
               
     }
  })

  return (
    <div>
      
      <IconButton color="primary" onClick={handleClickOpen} >
        <TuneIcon sx={{color:"white", backgroundColor:"crimson", fonstSize:"large", rotate:"90deg"}}/>
     </IconButton>
    
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <Box sx={{display:"flex",justifyContent:"space-around", alignItems:"center"}}>

        <TuneIcon sx={{color:"white", backgroundColor:"crimson", fonstSize:"large", rotate:"90deg"}}/>
        <Typography sx={{color:"gray",marginTop:"5px", fontWeight:"bold"}}variant="subtitle1" component="subtitle1">CHARGER FILTER</Typography>
        <ReplayIcon sx={{color:"crimson", fonstSize:"large"}}/>
        </Box>

        <DialogContent >
            <Box width={"300px"}>

            <Box display={"flex"} justifyContent={"space-between"} marginTop={"10px"}>
            <Typography sx={{color:"gray",marginTop:"5px"}}variant="subtitle1" component="subtitle1">Rest Room</Typography>
             <Switch name="RestRoom" value={values.RestRoom} onChange={handleChange}/>
             
            </Box>
            <Divider/>

            <Box display={"flex"} justifyContent={"space-between"} marginTop={"10px"}>
            <Typography sx={{color:"gray",marginTop:"5px"}}variant="subtitle1" component="subtitle1">Cafe</Typography>
             <Switch  name="Cafe" value={values.Cafe} onChange={handleChange}/>
            </Box>

            <Divider/>

            <Box display={"flex"} justifyContent={"space-between"} marginTop={"10px"}>
            <Typography sx={{color:"gray",marginTop:"5px"}}variant="subtitle1" component="subtitle1">Store</Typography>
             <Switch  name="Store" value={values.Store} onChange={handleChange}/>
            </Box>
            <Divider/>

            </Box>
          
        </DialogContent>
        <DialogActions>
         <Box sx={{width:"100%"}}>
         <Button  variant='contained'  sx={{backgroundColor:"crimson", width:"100%","&:hover": { backgroundColor: "#E21818"}}} onClick={handleSubmit}>Apply</Button>
         </Box>
          
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UserPaymentFilter
