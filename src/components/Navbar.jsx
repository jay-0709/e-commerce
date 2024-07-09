import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';

const Navbar = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="bg-gradient-to-r from-[#736FA1] px-1 md:px-11 py-3 via-[#9996C5] to-[#78719B]">
      <div className='flex items-center py-1 px-8 w-[95%] md:w-[60%] ml-3 md:ml-56 rounded-lg justify-center gap-6 md:gap-5 bg-white'>
        <div className='flex gap-4 md:gap-10 cursor-pointer'>
          <Link to="/">
            <img src='logo.png' alt='logo' width={25} />
          </Link>
          <img src='Vector.png' alt='Vector' width={15} />
          <img src='notification-icon.png' alt='Notification' width={15} />
          <img src='user.png' alt='User' width={15} />
        </div>
        <div className='items-center justify-center'>
          <input className='text-[10px] w-40 md:w-72 border-purple-400 border rounded-lg py-2 px-2 justify-start text-left outline-none' type='text' placeholder='What are you Looking for?' />
        </div>
        <Link to="/carts" className='flex items-center'>
          <img className='cursor-pointer' src='carts-icon.png' alt='carts' width={15} />
          {cartItems.length > 0 && (
            <span className="relative flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-white">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;