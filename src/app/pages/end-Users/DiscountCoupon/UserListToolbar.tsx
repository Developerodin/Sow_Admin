import { KTSVG } from "../../../../_metronic/helpers"
import { UsersListFilter } from "../../../modules/apps/user-management/users-list/components/header/UsersListFilter"
import { useListView } from "../../../modules/apps/user-management/users-list/core/ListViewProvider"
import AddDiscountModel from "./Components/AddDicountModel"


const UsersListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      <UsersListFilter />

      {/* begin::Export */}
      <button type='button' className='btn btn-light-primary me-3'>
        <KTSVG path='/media/icons/duotune/arrows/arr078.svg' className='svg-icon-2' />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      <button type='button' className='btn btn-primary' onClick={openAddUserModal}>
        <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
        <AddDiscountModel/>
      </button>
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
