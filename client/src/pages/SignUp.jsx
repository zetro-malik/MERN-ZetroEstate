import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignUp() {

  const navigate = useNavigate();

  const [formData , setFormData] = useState({})
  const [loading , setLoading] = useState(false)

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id ]: e.target.value
    })
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch('/api/auth/signup',{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        toast.error(data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
        return;
      }
      setLoading(false);
      console.log(data);
      toast.success("User Created", {
        position: toast.POSITION.TOP_RIGHT,
      })
      navigate('/sign-in')
    }catch(e){
      toast.error(e.message, {
        position: toast.POSITION.TOP_RIGHT
      });
        setLoading(false);
   
      
    }
  }


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
      <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'  onChange={handleChange}/>
      <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email'onChange={handleChange} />
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange} />
      <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? "Loading..." : "Sign Up"}</button>
      </form >
      <div className='flex gap-2 mt-5 '>
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div>
      <ToastContainer/>
    </div>
  )
}
