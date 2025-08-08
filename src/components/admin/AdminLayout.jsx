import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
    <AdminHeader />
    <div className='flex'>
      <AdminSidebar />
      <div className='flex-1'>
        
        <Outlet /> {/* Renders nested admin routes here */}
      </div>
    </div>
    </>
  )
}
