import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()

  return (
    <div className=' flex py-4 items-center px-8 bg-cyan-700 justify-between'>
        <button onClick={() =>{
          navigate('/')
        }}
        className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Return to Home Page</button>

        {/* Browser Roter history bhi maintain karta hai n tho ager humey back page pae jana hai tho navigate(-1) kar dena */}
        <button onClick={() =>{
          navigate(-1)
        }}
        className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back Page</button>
        
         <button onClick={() =>{
          navigate(+1)
        }}
        className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Next Page</button>
        
    </div>
  )
}

export default Navbar2