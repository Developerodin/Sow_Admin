import React, { useState } from 'react';
import { AppBar, Box, Button, Card, CardContent, FormControl, FormControlLabel, IconButton, Radio, RadioGroup, TextField, Toolbar, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const CreatePlan = () => {
  const [planDetails, setPlanDetails] = useState({
    name: '',
    price: '',
    features: 'basic', // Default feature
    priceType: 'monthly', // Default price type
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Plan details submitted:", planDetails);
  };

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
      <div className="card-header cursor-pointer">
        <Box sx={{ flexGrow: 1 }}>
          <div className="card-title m-0">
            <div
              onClick={handleBackButton}
              style={{
                backgroundColor: "#7265bd",
                width: "35px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <ArrowBackIcon style={{ fontSize: "16px", color: "#fff" }} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <h3 className="fw-bolder ">Create Plan</h3>
            </div>
          </div>
        </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  width: "400px",
                  padding: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <TextField
                  fullWidth
                  margin="normal"
                  label="Plan Name"
                  name="name"
                  value={planDetails.name}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Price"
                  name="price"
                  value={planDetails.price}
                  onChange={handleInputChange}
                />
                <FormControl component="fieldset" sx={{ marginTop: "20px" }}>
                  <RadioGroup
                    aria-label="features"
                    name="features"
                    value={planDetails.features}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel
                      value="basic"
                      control={<Radio />}
                      label="Basic Features"
                    />
                    <FormControlLabel
                      value="standard"
                      control={<Radio />}
                      label="Standard Features"
                    />
                    <FormControlLabel
                      value="premium"
                      control={<Radio />}
                      label="Premium Features"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl component="fieldset" sx={{ marginTop: "20px" }}>
                  <RadioGroup
                    aria-label="priceType"
                    name="priceType"
                    value={planDetails.priceType}
                    onChange={handleInputChange}
                  >
                    <FormControlLabel
                      value="monthly"
                      control={<Radio />}
                      label="Price Per Month"
                    />
                    <FormControlLabel
                      value="yearly"
                      control={<Radio />}
                      label="Price Per Year"
                    />
                  </RadioGroup>
                </FormControl>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        
      </div>
    </div>
  );
};
