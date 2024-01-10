
import React, { useEffect, useState } from "react";
import {
  ChartsWidget1,
  ListsWidget5,
  TablesWidget1,
  TablesWidget5,
} from "../../../_metronic/partials/widgets";
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";
import { Link, useParams } from "react-router-dom";
import { Dropdown1 } from "../../../_metronic/partials";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Base_url } from "../../Config/BaseUrl";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Drawer from '@mui/material/Drawer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Typography } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export const VendorsView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
};

const thTdStyle = {
   fontSize:"16px",
    textAlign: 'center',
    padding: '8px',
};

  const Data = [
    {
      id: 1,
      name: "Emma Smith",
      avatar: "/media/avatars/300-6.jpg",
      totalExperience: "5 years",
      totalClasses: "350",
      job: "Hatha Yoga",
      online: false,
      color: "primary",
    },
    {
      id: 2,
      name: "Melody Macy",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "150",
      job: "Vinyasa Yoga",
      online: true,
    },
    {
      id: 3,
      name: "Max Smith",
      avatar: "/media/avatars/300-1.jpg",
      totalExperience: "2 years",
      totalClasses: "90",
      job: "Ashtanga Yoga",
      online: true,
    },
    {
      id: 4,
      name: "Sean Bean",
      avatar: "/media/avatars/300-5.jpg",
      totalExperience: "2 years",
      totalClasses: "150",
      job: "Power Yoga",
      online: true,
    },
    {
      id: 5,
      name: "Brian Cox",
      avatar: "/media/avatars/300-25.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Bikram Yoga",
      online: true,
    },
    {
      id: 6,
      name: "Mikaela Collins",
      color: "warning",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Jivamukti Yoga",
      online: true,
    },
    {
      id: 7,
      name: "Francis Mitcham",
      avatar: "/media/avatars/300-9.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Iyengar Yoga",
      online: true,
    },
    {
      id: 8,
      name: "Olivia Wild",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Anusara Yoga",
      online: true,
    },
    {
      id: 9,
      name: "Neil Owen",
      color: "primary",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Sivananda Yoga",
      online: true,
    },
    {
      id: 10,
      name: "Dan Wilson",
      avatar: "/media/avatars/300-23.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Viniyoga",
      online: true,
    },
    {
      id: 11,
      name: "Emma Bold",
      color: "danger",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Kundalini Yoga",
      online: true,
    },
    {
      id: 12,
      name: "Ana Crown",
      avatar: "/media/avatars/300-12.jpg",
      totalExperience: "3 years",
      totalClasses: "250",
      job: "Yin Yoga",
      online: true,
    },
  ];
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [state2, setState2] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [state3, setState3] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [ProfileData, setProfileData] = useState(null);
  const [teacherData, setTeacherData] = useState(null);
  const [ userData, setUserData] = useState(null)
  const handelChatClick = () => {
    navigate("chats/");
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`${Base_url}api/b2b/${id}`);

      if (response.status === 200) {
        console.log("DAta =====>",response.data);
        setUserData(response.data);
      } else {
        console.error('Error fetching data:', response.data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  useEffect(() => {
    const ProfileDataFilter = Data.filter((el) => {
      return el.id === parseInt(id);
    });
    // console.log("Data =>",ProfileDataFilter)
    setProfileData(Data[0]);
    fetchData();
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:450,padding:"20px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

<div style={{height:"30px",backgroundColor:"orange",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}> Documents </p>
                   </div>
    </Box>
  );

  const toggleDrawer2 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState2({ ...state2, [anchor]: open });
  };

  const list2 = (anchor) => (
    <Box
      sx={{ width:550,padding:"20px" }}
      role="presentation"
      onClick={toggleDrawer2(anchor, false)}
      onKeyDown={toggleDrawer2(anchor, false)}
    >
        <div>

     
        <div style={{height:"30px",backgroundColor:"orange",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}>Categories </p>
                   </div>

                   <div style={{borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                   <KeyboardDoubleArrowDownIcon sx={{fontSize:"35px"}}/>
                   </div>

                   <div style={{height:"30px",backgroundColor:"grey",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}>{userData && userData.category} </p>
                   </div>

                   <div style={{borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                   <KeyboardDoubleArrowDownIcon sx={{fontSize:"35px"}}/>
                   </div>

                   <div style={{height:"30px",backgroundColor:"grey",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}>Sub Categories </p>
                   </div>

        </div>

        <div style={{marginTop:"20px"}}>
           
        <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={{ ...thTdStyle }}>Name</th>
                        <th style={thTdStyle}>Price</th>
                        <th style={thTdStyle}>Unit</th>
                        <th style={thTdStyle}></th>
                    </tr>
                </thead>
                <tbody >
                    {
                        userData && userData.sub_category.length > 0 ? 
                        userData.sub_category.map((el,index)=>{
                            return  <tr>
                            <td style={thTdStyle}>{el.name}</td>
                            <td style={thTdStyle}>₹ {el.price}</td>
                            <td style={thTdStyle}>{el.unit}</td>
                            <td style={thTdStyle}>
                              <MoreVertIcon/>
                            </td>
                        </tr>
                        })
                        :
                        <h2>No Sub Category Yet</h2>
                    }
                   
                  
                   
                </tbody>
            </table>

        </div>
    </Box>
  );

  const toggleDrawer3 = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState3({ ...state2, [anchor]: open });
  };

  const list3 = (anchor) => (
    <Box
      sx={{ width:450,padding:"20px" }}
      role="presentation"
      onClick={toggleDrawer3(anchor, false)}
      onKeyDown={toggleDrawer3(anchor, false)}
    >
 <div style={{height:"30px",backgroundColor:"orange",borderRadius:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <p style={{color:"#fff",marginTop:"10px"}}>Orders </p>
                   </div>
     
    </Box>
  );
  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div className="card-body pt-9 pb-0">
          <div className="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div className="me-7 mb-4">
              <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
              {userData && 
                  <span
                    className={`symbol-label bg-light-${ProfileData.color} text-${ProfileData.color} fs-5 fw-bolder`}
                  >
                    {userData.name.charAt(0)}
                  </span>
                }

                {userData && userData.status ? (
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                ) : (
                  <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-danger rounded-circle border border-4 border-white h-20px w-20px"></div>
                )}
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-2">
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                    >
                      {userData && userData.name}
                    </a>
                    <a href="#">
                      <KTSVG
                        path="/media/icons/duotune/general/gen026.svg"
                        className="svg-icon-1 svg-icon-primary"
                      />
                    </a>
                  </div>

                  <div className="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                  

                    {/* <span
                      onClick={handelChatClick}
                      className="d-flex align-items-center text-gray-400 text-hover-primary mb-2 me-3"
                    >
                      <KTSVG
                        path="/media/icons/duotune/communication/com003.svg"
                        className="svg-icon-4 me-1"
                      />
                      Chat
                    </span> */}
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap flex-stack">
                <div className="d-flex flex-column flex-grow-1 pe-8">
                  <div className="d-flex flex-wrap">
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr066.svg"
                          className="svg-icon-3 svg-icon-success me-2"
                        />
                        <div className="fs-2 fw-bolder">
                          {userData && userData.category}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">
                        Category
                      </div>
                    </div>

                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                      <div className="d-flex align-items-center">
                        <KTSVG
                          path="/media/icons/duotune/arrows/arr066.svg"
                          className="svg-icon-3 svg-icon-success me-2"
                        />
                        <div className="fs-2 fw-bolder">
                          {userData && userData.sub_category.length}
                        </div>
                      </div>

                      <div className="fw-bold fs-6 text-gray-400">Sub Category</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* {
 teacherData && teacherData.images && teacherData.images.length > 0 &&  <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
  <div className="card-header cursor-pointer">
    <div className="card-title m-0">
      <h3 className="fw-bolder m-0">Trainer Images</h3>
    </div>
  </div>

  <div className="card-body p-9">
  
  <div style={{display:"flex",alignItems:"center"}}>
  { teacherData.images.map((el)=>{
              return  (
                <img
                style={{marginRight:"30px",height:"150px",width:"150px"}}
                  src={`${Base_url}api/${el.path}`}
                  alt="Metronic"
                />
              )
            }) 
          }
  </div>
         

  </div>
</div>
} */}
      

      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>
        </div>

        <div className="card-body p-9">

        <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Gender
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.gender}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Dob
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.dob}</span>
            </div>
          </div>

        <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Register As
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.registerAs}</span>
            </div>
          </div>

        <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Email
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.email}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Phone
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.mobile}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Joining Date
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.createdAt}</span>
            </div>
          </div>


          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Address
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.Address},{userData && userData.pincode}</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              City
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.city}</span>
            </div>
          </div>


          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">
              Country
            
            </label>

            <div className="col-lg-8">
              <span className="fw-bolder fs-6 text-dark">{userData && userData.country}</span>
            </div>
          </div>
       

         

        </div>
      </div>


      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Information</h3>
          </div>
        </div>

        <div className="card-body p-9">
        

          

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Category</label>

            <div className="col-lg-8">
              <a className="fw-bold fs-6 text-dark text-hover-primary">
            

      <Button variant="outlined" onClick={toggleDrawer2("right", true)}>View</Button>
            
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Orders </label>

            <div className="col-lg-8">
              <a  className="fw-bold fs-6 text-dark text-hover-primary">
           
      <Button variant="outlined" onClick={toggleDrawer3("right", true)}>View</Button>
              </a>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-bold text-muted">Documents</label>

            <div className="col-lg-8">
              <a  className="fw-bold fs-6 text-dark text-hover-primary">
             
      <Button variant="outlined" onClick={toggleDrawer("right", true)}>View</Button>
              </a>
            </div>
          </div>

         
        </div>
      </div>

      <div className="row gy-10 gx-xl-10">
        {/* <div className="col-xl-6">
          <ChartsWidget1 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div> */}

        {/* <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div> */}
        <div className="col-xl-12">
          <ListsWidget5 className="card-xxl-stretch mb-5 mb-xl-10" />
        </div>
      </div>

      <Drawer
            anchor={`right`}
            open={state[`right`]}
            onClose={toggleDrawer(`right`, false)}
          >
            {list(`right`)}
          </Drawer>

          <Drawer
            anchor={`right`}
            open={state2[`right`]}
            onClose={toggleDrawer2(`right`, false)}
          >
            {list2(`right`)}
          </Drawer>

          <Drawer
            anchor={`right`}
            open={state3[`right`]}
            onClose={toggleDrawer3(`right`, false)}
          >
            {list3(`right`)}
          </Drawer>
    </>
  );
};


