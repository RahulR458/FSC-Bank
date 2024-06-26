import React from 'react'

export const AdminLogin = () => {
  return (
    <div className='max-w-[1640px] mx-auto h-screen bg-white flex justify-center items-center'>
        <div className='w-[350px] h-auto bg-white my-24 text-center items-center rounded-lg flex flex-col sm:shadow-custom-light sm:shadow-black sm:drop-shadow-xl'>
        <form >
            <h1 className='m-10 font-sans text-black font-bold text-2xl'>Admin Login</h1>
            <input type="text" placeholder='Mobile No :' className='w-[300px] h-10 p-2 px-4 mb-6 rounded-xl outline-none shadow-custom-light shadow-black drop-shadow-xl' />
            <input type="password" placeholder='Password' className='w-[300px] h-10 p-2 px-4 mb-12 rounded-xl outline-none shadow-custom-light shadow-black drop-shadow-xl' />
            {/* <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2'</button> */}
           
        </form>
        <button className='w-[100px] bg-violet-500 hover:bg-violet-700 text-white font-bold p-4 rounded-full mb-48 shadow-custom-light shadow-black drop-shadow-xl'>Login</button>
        <h1 className='text-violet-400  hover:text-violet-500 mb-4 cursor-pointer border rounded-xl p-2 border-violet-500 hover:border-violet-800 hover:bg-violet-100'>Create a New User</h1>
        </div>
    </div>
  )
}
