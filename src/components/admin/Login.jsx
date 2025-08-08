import React from 'react'


export default function Login() {
  return (
    <>
    
    <div className='flex md:flex-row flex-col w-full border-2 rounded-2xl p-1 mx-auto max-w-4xl shadow-lg mt-5'>
        <div className='md:w-1/2 w-full'>
            <img src="https://assets-v2.lottiefiles.com/a/750ed6f6-117b-11ee-97d8-73d47909a467/UP9s9oR49S.gif" alt="Login gif " width={300} height={300} className='p-2 m-5' />
        </div>
        <div className='bg-gray-400 text-2xl text-black p-1 md:w-1/2 w-full rounded-2xl'>
            <h1 className='text-center font-bold'>Login Here: </h1>
            <hr />
            <form className='form-control'>
                <label htmlFor='name' className='font-medium m-2'>Name: </label>
                <input type="text" id='name' placeholder='Type your Name Here:  ' className='border-2 font-light m-3 w-2/3 p-2'/> <br />
                <label htmlFor='email' className='font-medium m-2'>E-Mail Id: </label>
                <input type="email" id='email' placeholder='Type your Email Id Here:  ' className='border-2 font-light m-1 w-2/3 p-2'/> <br />
                <button type='submit' className='border-4 text-xl font-black bg-blue-500 m-2 p-3 rounded-2xl text-center hover:text-white hover:bg-amber-950'>Login</button>
                <h4 className='m-2'>Forgot Password ?? <button type='submit' className='bg-red-400 font-black rounded-2xl p-1 m-1 hover:text-white hover:bg-blue-500'>Click Here: </button></h4>
            </form>
        </div>
    </div>
    
    </>
  )
}
