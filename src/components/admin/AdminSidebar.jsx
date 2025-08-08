import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
export default function AdminSidebar() {
  return (
   <>

    <div>
      <img src="https://static.vecteezy.com/system/resources/previews/020/429/953/non_2x/admin-icon-vector.jpg" alt="" width={100} height={100} className='p-2 m-2'/>
      <hr />
      <ul className='text-xl p-2 m-2'>
        <Link to ='/admin/dashboard' className='hover:underline'><li>Dashboard</li></Link>
        <Link to ='/admin/ManageCustomer' className='hover:underline'><li>Manage Customers</li></Link>
        <Link to ='/admin/AddCategory' className='hover:underline'><li>Add Category</li></Link>
        <Link to ='/admin/AddCourse' className='hover:underline'><li>Add Courses</li></Link>
        <Link to ='/admin/ManageContact' className='hover:underline'><li>Manage Contact</li></Link>
        <Link to ='/admin/AddFranchise' className='hover:underline'><li>Add Franchise</li></Link>
        <Link to ='/admin/ManageStaff' className='hover:underline'><li>Manage Staff </li></Link>
        <Link to ='/admin/ManageReview' className='hover:underline'><li>Manage Reviews </li></Link>
        <Link to =''><li><button type='button' onClick={Login} className='bg-red-700 text-white p-2 m-2 rounded-2xl hover:bg-white hover:text-red-700 hover:border-2'>Logout</button></li></Link>
      </ul>
    </div>

   </>
  )
}
