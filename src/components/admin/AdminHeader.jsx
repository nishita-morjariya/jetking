import React from 'react';

export default function AdminHeader() {
  return (
    <header className="bg-red-700 text-white p-5 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* App Name */}
        <h1 className="text-2xl font-bold">Jetking App</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Here..."
          className="p-2 w-full md:w-1/3 rounded-2xl border-2 border-white text-black focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Welcome Message */}
        <p className="text-lg font-semibold">Welcome Admin</p>
      </div>
    </header>
  );
}
