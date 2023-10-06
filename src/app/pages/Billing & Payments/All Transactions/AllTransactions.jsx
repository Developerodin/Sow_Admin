import React, { useEffect, useState } from 'react'
import PageHeader from './Components/PageHeader'
import SessionHeader from './Components/SessionHeader'
import { KTCard } from '../../../../_metronic/helpers'
import { GenralTabel } from '../../../TabelComponents/GenralTable'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditBooking from './Components/EditBooking'
import { SessionDrawer } from './Components/SessionDrawer'


const AllTransactions = () => {
  const [filterRows,setFilterRows] = useState([])
  const [searchInput, setSearchInput] = useState("");

  const column=[
    {name:"Booking Id"},
    {name:"Charger Name"},
    {name:"Connector ID"},
    {name:"User Details"},
    {name:"Vehicle Details"},
    {name:"Company"},
    {name:"Charging Duration"},
    
    {name:"Price"},
    {name:"Units"},
    {name:"Actions"},
  ]
  const rows = [
    {
      BookingId: <SessionDrawer user={"9823325"} />,
      ChargerName: "BT EcoSpace Charger-1",
      ConnectorId: "2",
      UserDetails: "+33-6699",
      VehicleDetails: "Mahindra e-Verito",
      Company: "Lithium",
      ChargingDuration: "0:37:30",
      Price: "52.16",
      Units: "4.42",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823326"} />,
      ChargerName: "BT EcoSpace Charger-2",
      ConnectorId: "3",
      UserDetails: "+33-6700",
      VehicleDetails: "Nissan Leaf",
      Company: "Energia",
      ChargingDuration: "1:15:45",
      Price: "85.25",
      Units: "7.18",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823327"} />,
      ChargerName: "FastCharge Pro Charger",
      ConnectorId: "1",
      UserDetails: "+33-6701",
      VehicleDetails: "Tesla Model S",
      Company: "Tesla Inc.",
      ChargingDuration: "0:45:00",
      Price: "70.50",
      Units: "6.00",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823328"} />,
      ChargerName: "ChargeMe Charger-5",
      ConnectorId: "4",
      UserDetails: "+33-6702",
      VehicleDetails: "Chevrolet Bolt",
      Company: "ChargeMe Ltd.",
      ChargingDuration: "0:50:20",
      Price: "65.75",
      Units: "5.52",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823329"} />,
      ChargerName: "GreenPower Charger-3",
      ConnectorId: "2",
      UserDetails: "+33-6703",
      VehicleDetails: "BMW i3",
      Company: "GreenPower Solutions",
      ChargingDuration: "0:55:10",
      Price: "45.60",
      Units: "3.82",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823330"} />,
      ChargerName: "EcoCharge Station-1",
      ConnectorId: "1",
      UserDetails: "+33-6704",
      VehicleDetails: "Ford Mustang Mach-E",
      Company: "EcoCharge Corp.",
      ChargingDuration: "0:40:15",
      Price: "60.25",
      Units: "5.08",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823331"} />,
      ChargerName: "PowerCharge EV Charger",
      ConnectorId: "3",
      UserDetails: "+33-6705",
      VehicleDetails: "Audi e-tron",
      Company: "PowerCharge Technologies",
      ChargingDuration: "1:10:30",
      Price: "95.00",
      Units: "8.00",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823332"} />,
      ChargerName: "ChargeIt Charger-2",
      ConnectorId: "2",
      UserDetails: "+33-6706",
      VehicleDetails: "Hyundai Kona Electric",
      Company: "ChargeIt Inc.",
      ChargingDuration: "0:35:55",
      Price: "42.30",
      Units: "3.56",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823333"} />,
      ChargerName: "GreenCharge Pro Charger-1",
      ConnectorId: "1",
      UserDetails: "+33-6707",
      VehicleDetails: "Kia Soul EV",
      Company: "GreenCharge Pro",
      ChargingDuration: "0:48:45",
      Price: "67.40",
      Units: "5.68",
      Action: <EditBooking />,
    },
    {
      BookingId: <SessionDrawer user={"9823334"} />,
      ChargerName: "ChargeFast Charger-4",
      ConnectorId: "4",
      UserDetails: "+33-6708",
      VehicleDetails: "Jaguar I-PACE",
      Company: "ChargeFast Ltd.",
      ChargingDuration: "1:30:00",
      Price: "120.00",
      Units: "10.00",
      Action: <EditBooking />,
    },
    // Add more data entries as needed
  ];
  
const handleSearchInputChange = (event) => {
  const inputValue = event.target.value.toLowerCase();

  if(inputValue === ""){
    setFilterRows(rows)
  }
  else{
       // Filter the rows based on whether any property contains the search input
  const filteredResults = rows.filter((item) =>
  Object.values(item).some((value) =>
    String(value).toLowerCase().includes(inputValue.toLowerCase())
  )
);

// Update the filteredRows state
setFilterRows(filteredResults);
  }
 

  // Update the search input state
  setSearchInput(inputValue);
};

useEffect(()=>{
  setFilterRows(rows)
},[])

  return (
    <div>
       <SessionHeader handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}/>
   
       <KTCard>
      <GenralTabel rows={filterRows} column={column}/>
      </KTCard>
    </div>
  )
}

export default AllTransactions
