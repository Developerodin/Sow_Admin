import { FC, Suspense, useContext} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'

import UserContext from '../../Context/UserContext'

import { B2BUsers } from '../pages/ManageB2BUsers/B2BUsers'

import { B2BUserAdd } from '../pages/ManageB2BUsers/B2BUserAdd'
import { Vendors } from '../pages/Vendors/Vendors'
import { Rates } from '../pages/Rates/Rates'
import { Orders } from '../pages/Orders/Orders'
import { Categories } from '../pages/Categories/Categories'
import { Sales } from '../pages/Sales/Sales'
import { Plans } from '../pages/Plans/Plans'
import { Accounts } from '../pages/Accounts/Accounts'
import { Users } from '../pages/Users/Users'
import { ViewCategories } from '../pages/Categories/ViewCategories'
import { CreateInvoice } from '../pages/Sales/CreateInvoice'
import { AddVendors } from '../pages/Vendors/AddVendors'
import { VendorsView } from '../pages/Vendors/VendorsView'
import { B2BOrders } from '../pages/Orders/B2BOrders'
import { AddB2BOrder } from '../pages/Orders/AddB2BOrder'








const PrivateRoutes = () => {
  const {userPermisson}=useContext(UserContext);

  return (
    <Routes>
      <Route element={<MasterLayout />}>
  
        
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
   
        <Route path='dashboard' element={<DashboardWrapper />} />
      
        <Route path='menu-test' element={<MenuTestPage />} />
     
       
        <Route
          path='vendors/*'
          element={
            <SuspensedView>
              <Vendors />
            </SuspensedView>
          }
        />

<Route
          path='vendors/add/*'
          element={
            <SuspensedView>
              <AddVendors />
            </SuspensedView>
          }
        />
        <Route
          path='vendors/view/:id'
          element={
            <SuspensedView>
              <VendorsView />
            </SuspensedView>
          }
        />

<Route
          path='rates/*'
          element={
            <SuspensedView>
              <Rates />
            </SuspensedView>
          }
        />

<Route
          path='orders/*'
          element={
            <SuspensedView>
              <Orders />
            </SuspensedView>
          }
        />
        <Route
          path='b2b_orders/*'
          element={
            <SuspensedView>
              <B2BOrders />
            </SuspensedView>
          }
        />
        <Route
          path='b2b_orders/add/*'
          element={
            <SuspensedView>
              <AddB2BOrder />
            </SuspensedView>
          }
        />

<Route
          path='categories/*'
          element={
            <SuspensedView>
              <Categories />
            </SuspensedView>
          }
        />

<Route
          path='categories/view-categorie/:id'
          element={
            <SuspensedView>
              <ViewCategories />
            </SuspensedView>
          }
        />

<Route
          path='sales/*'
          element={
            <SuspensedView>
              <Sales />
            </SuspensedView>
          }
        />
        <Route
          path='sales/create-invoice/*'
          element={
            <SuspensedView>
              <CreateInvoice />
            </SuspensedView>
          }
        />

<Route
          path='plans/*'
          element={
            <SuspensedView>
              <Plans />
            </SuspensedView>
          }
        />

<Route
          path='accounts/*'
          element={
            <SuspensedView>
              <Accounts />
            </SuspensedView>
          }
        />

<Route
          path='users/*'
          element={
            <SuspensedView>
              <Users />
            </SuspensedView>
          }
        />
  

<Route
          path='b2b_users/*'
          element={
            <SuspensedView>
              <B2BUsers />
            </SuspensedView>
          }
        />
        <Route
          path='b2b_users_add/*'
          element={
            <SuspensedView>
              <B2BUserAdd />
            </SuspensedView>
          }
        />






        {/* Page Not Found /error/404 */}

        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
