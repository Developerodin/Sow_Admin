import { Box, Button, Card, CardContent, Tab,InputAdornment, Tabs, Typography, TextField } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { InfoCard } from '../../../Components/InfoCard';
import Grid from "@mui/material/Grid";
import { CategoriesCard } from '../../../Components/CategoriesCard';
import { SubCategoriesCard } from '../../../Components/SubCategoriesCard';

const orangeTheme = createTheme({
  palette: {
    primary: {
      main: '#EE731B', // Set the main color to your desired shade of orange
    },
  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const Categories = () => {

  const [value, setValue] = React.useState(0);
  const [searchInput, setSearchInput] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangetabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearch = () => {
    // const filteredData = rows.filter((row) =>
    //   Object.values(row)
    //     .filter((value) => typeof value === 'string') // Filter only string values
    //     .some((value) =>
    //       value.toLowerCase().includes(searchInput.toLowerCase())
    //     )
    // );
    // setFilterRows(filteredData);
  };
  const handleResetFilter = () => {
    setSearchInput('');
    // setFilterRows(rows);
  };

  return (
    <Box >

       <Card sx={{minHeight:"100vh"}}>
        <CardContent>

          <Box >
             

          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <ThemeProvider theme={orangeTheme}>
        <Tabs value={value} onChange={handleChangetabs} aria-label="basic tabs example" textColor="primary"
        indicatorColor="primary"
       
        >
          <Tab label="Categories" {...a11yProps(0)}  style={{fontSize:"16px",fontWeight:600,color:`${value === 0 ? "#EE731B" : "#555555"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}}/>
          <Tab label="Sub-Categories" {...a11yProps(1)} style={{fontSize:"16px",fontWeight:600,color:`${value === 1 ? "#EE731B" : "#555555"}`,marginRight:"10px",borderRadius:"10px",marginBottom:"10px"}} />
         
        </Tabs>
        </ThemeProvider>
      </Box>

      
          </Box>
         

          <Box sx={{ width: '100%',height:"70vh",overflow:"auto" }}>
      

      

      <CustomTabPanel value={value} index={0}>
       
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
            {/* <TextField fullWidth label="Search" /> */}
            <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
            <TextField
          label="Search"
          id="outlined-start-adornment"
          size='small'
          sx={{ m: 1, width: '250px' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
          value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
        />

<Button variant="contained" style={{marginLeft:"20px",background:"black",height:"33px"}} startIcon={<FilterListIcon />} >A-Z</Button>
            </Box>
            



              <Box>
              
              <Button variant="contained" style={{marginLeft:"20px",background:"#FF8604"}} startIcon={<AddIcon />} >Add Category</Button>
            </Box>
            </Box>

         <Grid container spacing={2}>
                <Grid item xs={3}>
                <CategoriesCard Data ={{subCatNo:20,name:"Electronics"}} />
                </Grid>
              </Grid>
        
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"}}>
            {/* <TextField fullWidth label="Search" /> */}
            <Box sx={{display:"flex",justifyContent:"left",alignItems:"center"}}>
            <TextField
          label="Search"
          id="outlined-start-adornment"
          size='small'
          sx={{ m: 1, width: '250px' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
          }}
          value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
        />

<Button variant="contained" style={{marginLeft:"20px",background:"black",height:"33px"}} startIcon={<FilterListIcon />} >A-Z</Button>
            </Box>
            



              <Box>
              
              <Button variant="contained" style={{marginLeft:"20px",background:"#FF8604"}} startIcon={<AddIcon />} >Add Sub Category</Button>
            </Box>
            </Box>


            <Grid container spacing={2}>
                <Grid item xs={3}>
               <SubCategoriesCard  name={"Newspaper"}/>
                </Grid>
              </Grid>

        
      </CustomTabPanel>

     

    </Box>
    
        </CardContent>
       </Card>

       
   </Box>
  )
}

