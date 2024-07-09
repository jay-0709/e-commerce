import React from 'react'
import {Link} from 'react-router-dom'

const CartRoute = () => {
  return (
    <div className='flex mt-4 text-[13px] gap-2 ml-5 font-thin'>
        <Link to='/'>
        <p>Home</p>
        </Link>
        <p>/</p>
        <Link to="/">
        <p>Products</p>
        </Link>
        <p>/</p>
        <p className='text-[#736FA1]'>Cart</p>
    </div>
  )
}

export default CartRoute