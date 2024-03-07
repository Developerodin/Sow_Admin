import { Box, Button, Card, CardContent, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

export const CreateInvoice = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        gstNumber: '',
        address: '',
        email: '',
        contactNumber: '',
        productName: '',
        productDescription: '',
        pricePerUnit: '',
        quantity: '',
    });
    
    const [totalAmount, setTotalAmount] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <Card>
            <CardContent>
                <Box>
                    <CloseIcon onClick={handleGoBack} sx={{ fontSize: "25px" }} />
                </Box>

                <Box sx={{ marginLeft: "25px", marginTop: "20px" }}>
                    <Typography sx={{ fontSize: "25px" }}>Create Invoice</Typography>
                    <Typography sx={{ fontSize: "16px" }}>Status : credited</Typography>
                </Box>

                <Box sx={{ width: "60%", marginLeft: "25px" }}>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ marginTop: "25px" }}>
                            <Typography sx={{ color: "#9E9E9E", fontSize: "16px" }}>Enter Customer Name</Typography>
                            <TextField
                                sx={{ marginTop: "10px" }}
                                fullWidth
                                placeholder='Name...'
                                name="customerName"
                                value={formData.customerName}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box sx={{ marginTop: "25px" }}>
                            <Typography sx={{ color: "#9E9E9E", fontSize: "16px" }}>GSTIN / LLP Reg No. / Prop. Number</Typography>
                            <TextField
                                sx={{ marginTop: "10px" }}
                                fullWidth
                                placeholder='Number...'
                                name="gstNumber"
                                value={formData.gstNumber}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box sx={{ marginTop: "25px" }}>
                            <Typography sx={{ color: "#9E9E9E", fontSize: "16px" }}>Enter Address</Typography>
                            <TextField
                                sx={{ marginTop: "10px" }}
                                minRows={4}
                                fullWidth
                                placeholder='Address...'
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box sx={{ marginTop: "25px" }}>
                            <Typography sx={{ color: "#9E9E9E", fontSize: "16px" }}>Enter Email</Typography>
                            <TextField
                                sx={{ marginTop: "10px" }}
                                fullWidth
                                placeholder='Email...'
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box sx={{ marginTop: "25px" }}>
                            <Typography sx={{ color: "#9E9E9E", fontSize: "16px" }}>Enter Contact Number</Typography>
                            <TextField
                                sx={{ marginTop: "10px" }}
                                fullWidth
                                placeholder='Contact Number...'
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                            />
                        </Box>

                        <Box sx={{ marginTop: "25px" }}>
                            <Typography sx={{ fontSize: "36px" }}> Product Details</Typography>
                            <TextField
                                fullWidth
                                placeholder='Product Name'
                                sx={{ marginTop: "20px" }}
                                name="productName"
                                value={formData.productName}
                                onChange={handleInputChange}
                            />
                            <TextareaAutosize
                                minRows={5}
                                style={{ width: "100%", marginTop: "10px", padding: "10px" }}
                                placeholder='Product description ...'
                                name="productDescription"
                                value={formData.productDescription}
                                onChange={handleInputChange}
                            />
                            <Box sx={{ marginTop: "20px" }}>
                                <TextField
                                    label="Enter Price/Unit"
                                    name="pricePerUnit"
                                    value={formData.pricePerUnit}
                                    onChange={handleInputChange}
                                />
                                <TextField
                                    sx={{ marginLeft: "10px" }}
                                    label="Enter Qty"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleInputChange}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ marginTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ width: "293px", height: "96px", border: "1px solid #BFBFBF", textAlign: "center" }}>
                                <Typography sx={{ fontSize: "22px" }}>Total Amount</Typography>
                                <Typography sx={{ fontSize: "25px", fontWeight: "bold", marginTop: "10px" }}>₹ 120000</Typography>
                            </Box>

                            <Box>
                                <Button type="submit" size='large' sx={{ backgroundColor: "#FF8604", color: "#fff" }}>Setup payment</Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </CardContent>
        </Card>
    )
}
