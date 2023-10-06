/* eslint-disable react/jsx-no-target-blank */
import{useContext} from 'react'
import {useIntl} from 'react-intl'

import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'
import UserContext from '../../../../../Context/UserContext'

const SidebarMenuMain = () => {
  // const {userPermisson}=useContext(UserContext);
  const userPermisson=JSON.parse(sessionStorage.getItem('userPermisson'))
  const intl = useIntl();


  return (

    <>
    {userPermisson ? 
      <>
        
      {/* dashboard */}
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen025.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
  
  
  
  
  <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Manage Store</span>
          </div>
               </div>
               <SidebarMenuItem
            to='/categories/'
            icon='/media/icons/duotune/general/gen022.svg'
            title='Categories'
            fontIcon='bi-layers'
           
          />

<SidebarMenuItem
            to='/products/'
            icon='/media/icons/duotune/general/gen022.svg'
            title='Products'
            fontIcon='bi-layers'
           
          />

<SidebarMenuItem
            to='/orders/'
            icon='/media/icons/duotune/general/gen022.svg'
            title='Orders'
            fontIcon='bi-layers'
           
          />
  
  
   
  
  {/* Manage EV Owners */}
                <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7' style={{color:"#fff"}}>Manage Customers</span>
          </div>
               </div>
  
               {/* {
            userPermisson.EVOwnersOverView && (
              <SidebarMenuItem
              to='/evowners/overview/'
              icon='/media/icons/duotune/abstract/abs042.svg'
              title='Overview'
              fontIcon='bi-layers'
              
            />
          
            )
          } */}
  
  {
            userPermisson.UserList && (
              <SidebarMenuItem
            to='/evowners/userlist/'
            icon='/media/icons/duotune/communication/com013.svg'
            title='UserList'
            fontIcon='bi-layers'
           
          />
          
            )
          }
           
  
  
           {
            userPermisson.Complains && (
              <SidebarMenuItem
              to='evowners/complains/'
              icon='/media/icons/duotune/abstract/abs026.svg'
              title='Complains'
              fontIcon='bi-layers'
             
            />
          
            )
          }
  
  
  
  
  
  
  
  {/* Chats  */}
  
  {/* <div className='menu-item'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Chats</span>
          </div>
        </div> */}
  
        {/* {
            userPermisson.PrivateChat && (
              <SidebarMenuItem
              to='/chats/private-chat/'
              icon='/media/icons/duotune/general/gen002.svg'
              title='Private Chat'
              fontIcon='bi-layers'
            />
          
            )
          } */}
  
       
  
  
        <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Billing & Payments</span>
          </div>
        </div>
  
        {/* {
            userPermisson.BillingOverview && (
              <SidebarMenuItem
              to='/billing/overview/'
              icon='/media/icons/duotune/abstract/abs014.svg'
              title='Overview'
              fontIcon='bi-layers'
            />
          
            )
          } */}
  
  {
            userPermisson.AllTransactions && (
              <SidebarMenuItem
              to='/billing/alltransaction/'
              icon='/media/icons/duotune/layouts/lay008.svg'
              title='All Transactions'
              fontIcon='bi-layers'
            />
          
            )
          }
  
      
  {
            userPermisson.CompanyPayouts && (
              <SidebarMenuItem
      to='/billing/companypayouts/'
      icon='/media/icons/duotune/text/txt002.svg'
      title='Company Payouts'
      fontIcon='bi-layers'
    />
          
            )
          }
  
  
  {
            userPermisson.DiscountCoupons && (
              <SidebarMenuItem
              to='/billing/discountCoupons/'
              icon='/media/icons/duotune/abstract/abs014.svg'
              title='Discount Coupons'
              fontIcon='bi-layers'
            />
          
            )
          }
  
  
  
  
  
  
       
  
  <div className='menu-item mt-5'>
          <div className='menu-content'>
            <span className='menu-heading fw-bold  fs-7'>Settings</span>
          </div>
        </div>
  
        {
            userPermisson.AdminManagment && (
              <SidebarMenuItem
              to='/settings/adminmanagment/'
              icon='/media/icons/duotune/general/gen002.svg'
              title='Admin Managment'
              fontIcon='bi-layers'
            />
          
            )
          }
      
  
      {
            userPermisson.AccessManagment && (
              <SidebarMenuItem
      to='/settings/accessmanagment/'
      icon='/media/icons/duotune/abstract/abs027.svg'
      title='Access Management'
      fontIcon='bi-layers'
    />
          
            )
          }
  
  
  {/* {
            userPermisson.SystemMasters && (
              <SidebarMenuItem
              to='/settings/system-masters/'
              icon='/media/icons/duotune/coding/cod003.svg'
              title='System Masters'
              fontIcon='bi-layers'
            />
          
            )
          } */}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    
  
    </>
    :
    <div>No Permisson Allowed</div>
  }
    </>
  
  )
}

export {SidebarMenuMain}
