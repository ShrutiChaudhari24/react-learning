import React from 'react'
import {Link, Outlet} from "react-router-dom";

const product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
          <Link className='text-xl font-semibold' to='/product/product1'>Product1</Link>
          <Link className='text-xl font-semibold' to='/product/product2'>Product2</Link>
          <Link className='text-xl font-semibold' to='/product/product3'>Product3</Link>
       
        {/* ye humey react router dom provide karta hai aur ye likhne sae hi nested route pae hum ja payenge */}
        <Outlet/>
        </div>
    </div>
  )
}



export default product