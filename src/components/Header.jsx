import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full bg-red-600 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
        
        {/* Logo and Branding */}
        <div className="flex items-center">
          <img src="images/logo.png" alt="Jetking Institute Logo" width={100} height={100} className="mr-4 p-0"/>
            <div>
                <p className="text-3xl font-bold leading-tight">Jetking</p> <span className="text-xl font-normal"> Better Life </span>
            </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 font-light text-lg">
            <li className="hover:underline cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:underline cursor-pointer"><Link to='/AboutUs'>About Us</Link></li>
            <li className="hover:underline cursor-pointer"><Link to='/Courses'>Our Courses </Link></li>
            <li className="hover:underline cursor-pointer"><Link to='/Centers'>Centers</Link></li>
            <li className="hover:underline cursor-pointer"><Link to='/Placements'>Placements</Link></li>
            <li className="hover:underline cursor-pointer"><Link to='/Franchise'>Franchise</Link></li>
            <li className="hover:underline cursor-pointer"><Link to='/Blog'>Blogs</Link></li>
            <li className="hover:underline cursor-pointer"><Link to='/ContactUs'>Contact Us </Link></li>
          </ul>
        </nav>
            <a href="tel:07666830000" className="flex items-center gap-2 font-medium shadow rounded-2xl border-2 border-white px-4 py-2 mt-4 md:mt-0 hover:bg-white hover:text-red-600 transition"> <PhoneCall className="w-5 h-5"/>07666830000</a> 
        </div>
    </header>
  );
}
