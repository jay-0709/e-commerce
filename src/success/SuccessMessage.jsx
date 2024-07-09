import React from 'react'
import { Link } from 'react-router-dom'

const SuccessMessage = () => {
  return (
    <div className='item-center justify-center mt-10 text-center flex flex-1'>
     <div>
        <img src='success.png' alt='Success' />
        <h3 className='text-[25px] mt-4'>Transaction Successful</h3>
        <Link to="/">
        <button className='bg-gradient-to-r from-[#736FA1] px-1 md:px-11 py-3 via-[#9996C5] to-[#78719B] text-white text-[13px] rounded-md mt-5'>Back To Home</button>
        </Link>
     </div>
     </div>
  )
}

export default SuccessMessage