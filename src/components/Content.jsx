import React from 'react'
import { Check } from 'lucide-react';

export default function Content() {
  return (
    <>
    
   <section id='slider'>
    <div className='bg-white p-5 ms-15 mt-10 flex flex-row leading-10 '>
        <p>
            <span className='text-gray-500 text-4xl font-bold'>India's Only BCA With A Job <br /> After First Year +<br /> </span><span className='text-red-700 font-bold text-4xl'>Cirtification Included </span><br />
            <h4 className=' font-light'>with over 79 years of Legacy </h4>
    
    <div className='flex items-center text-large gap-2'>
        <Check className='text-white bg-red-600 rounded-xl'/><span>Get a job after the first year</span>
    </div>

    <div className='flex items-center text-large gap-2'>
        <Check className='text-white bg-red-600 rounded-xl'/><span>Get a degree from top 100 university</span>
    </div>

    <div className='flex items-center text-large gap-2'>
        <Check className='text-white bg-red-600 rounded-xl'/><span>No entrance test required</span>
    </div>

    <div className='flex items-center text-large gap-2'>
        <Check className='text-white bg-red-600 rounded-xl'/><span>80% practical oriented degree program</span>
    </div>

    <div className='flex items-center text-large gap-2'>
        <Check className='text-white bg-red-600 rounded-xl'/><span>12,000+ Recruitment Partners</span>
    </div>
    <button className="p-5 m-2 mt-5 font-extrabold text-2xl shadow bg-red-600 text-white hover:bg-white hover:text-red-600 transition"> Enquire Now </button>
    <h2 className='text-red-700 text-2xl'>Call: <a className='text-2xl hover:underline cursor-pointer'>07666830000</a></h2>
    </p>
    <img src="images/slider.avif" alt="Slider Image" width={600} height={500}/>
    </div>
   </section>
    
    </>

)
}
