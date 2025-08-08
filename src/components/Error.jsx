import React from 'react'
import { Outlet } from 'react-router-dom'
export default function ErrorApp() {
  return (
    <div className="p-4">
      <h3 className="text-2xl font-semibold mb-4">404 - Page Not Found </h3>
      {/* Add contact management logic here */}

      <Outlet />
      
    </div>
  )
}
