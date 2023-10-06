import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, TextField } from "@mui/material/";
import { styled } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function AddChargerModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const MyComponent = styled(TextField)({
    margin: 8,
    width: "93%"
  });

  const MyComponent2 = styled(TextField)({
    margin: 8,
    width: "45%"
  });
  // name, city, state, pin code, country, contact person name,
  // number, email, company email, bank account number & details, GST number.
  // 2. Chargers- charger name, CPO name, rfid, map location, status, alias.
  return (
    <div>
      <Button onClick={handleOpen} sx={{color:"white",fontWeight:"bold"}}>Add Session</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MyComponent
            id="outlined-basic"
            label="Charger Name"
            variant="outlined"
          />
          
          <MyComponent2 id="outlined-basic" label="City" variant="outlined" />
          <MyComponent2 id="outlined-basic" label="Slot" variant="outlined" />
          <MyComponent2
            id="outlined-basic"
            label="Start Time"
            variant="outlined"
          />
          <MyComponent2
            id="outlined-basic"
            label="End Time"
            variant="outlined"
          />
         

          <Box sx={{ marginTop: "30px" }}>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ marginLeft: "80%" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
