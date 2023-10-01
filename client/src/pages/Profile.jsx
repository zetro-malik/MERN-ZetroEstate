import React from 'react'
import { useSelector } from 'react-redux'


export default function Profile() {
  const {currentUser} = useSelector(e=>e.user);
  return (
    <div className='p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
     <form className='flex flex-col gap-4'>
      <img src={currentUser.avatar} alt="profile" className='rounded-full h-24 w-24 object-cover self-center cursor-pointer mt-2' />
      <input type="text" placeholder='username' id='username' className='border p-3 rounded-lg' />
      <input type="text" placeholder='emailpassword' id='emailpassword' className='border p-3 rounded-lg' />
      <input type="text" placeholder='password' id='password' className='border p-3 rounded-lg' />
      <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>update</button>
     </form>
     <div className='flex justify-between items-center mt-5'>
      <span className='text-red-700 cursor-pointer'>Delete Account</span>
      <span className='text-red-700 cursor-pointer'>Sign Out</span>

     </div>
    </div>
  )
}
