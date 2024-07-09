import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#352A47] mt-10'>
      <div className='flex flex-wrap gap-4 md:gap-48 justify-center md:justify-start'>
        <div className='mt-10 ml-2 md:ml-9 mb-6'>
          <img src='fgc-logo.png' alt='fgc-logo' width={120} />
        </div>
        <div className='flex flex-wrap gap-5 md:gap-32 ml-4 md:ml-28 mt-5'>
          <div className='min-w-[150px]'>
            <h4 className='text-white font-bold mb-2'>Services</h4>
            <p className='text-white text-sm mb-2'>Clothing</p>
            <p className='text-white text-sm mb-2'>Merch</p>
            <p className='text-white text-sm mb-2'>Branding</p>
            <p className='text-white text-sm mb-2'>Instructors</p>
          </div>
          <div className='min-w-[150px]'>
            <h4 className='text-white font-bold mb-2'>About Us</h4>
            <p className='text-white text-sm mb-2'>History</p>
            <p className='text-white text-sm mb-2'>Overview Of Missions</p>
            <p className='text-white text-sm mb-2'>Team</p>
            <p className='text-white text-sm mb-2'>Testimonials</p>
            <p className='text-white text-sm mb-2'>Partnership</p>
          </div>
          <div className='min-w-[150px]'>
            <h4 className='text-white font-bold mb-2'>Support</h4>
            <p className='text-white text-sm mb-2'>Contact</p>
            <p className='text-white text-sm mb-2'>Give Feedback</p>
            <p className='text-white text-sm mb-2'>System Status</p>
            <p className='text-white text-sm mb-2'>Privacy Policy</p>
          </div>
        </div>
      </div>
      <h4 className='text-center text-white mt-8 mb-3 text-sm'>Copyright Investo 2023. All rights reserved</h4>
    </div>
  );
}

export default Footer;
