import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const CartNavbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#736FA1] px-1 md:px-11 py-3 via-[#9996C5] to-[#78719B] text-white text-[13px]">
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-10'>
        <h3 className="text-center md:text-left">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
        <p className="text-center md:text-left">Shop Now</p>
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <p className='flex items-center'>English <RiArrowDropDownLine /></p>
        </div>
      </div>
    </div>
  );
}

export default CartNavbar;
