import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch,useSelector } from 'react-redux';

import { signInStart,signInError, signInSuccess } from '../redux/user/userSlice';

export default function SignIn() {


  const [formData, setFormData] = useState({})

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {loading, error} = useSelector((state) => {
    return state.user
  });

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id ]: e.target.value
    })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    dispatch(signInStart())
    try{
      const res = await fetch('/api/auth/signin',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInError(data.message))
        return;
      }
      dispatch(signInSuccess(data))  
      navigate('/sign-in')
    }catch(e){
      dispatch(signInError(e.message))
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
      <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email'onChange={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange} />
      <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? "Loading..." : "Sign In"}</button>
      </form >
      <div className='flex gap-2 mt-5 '>
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
    </div>
  )
}
