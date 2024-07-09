import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">First Name<span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Company Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Street Address<span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block mb-1">Town/City<span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Phone Number<span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email Address<span className="text-red-500">*</span></label>
              <input
                type="email"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Items (4)</span>
              <span className="text-gray-700 font-semibold">$640,000</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Delivery</span>
              <span className="text-gray-700 font-semibold">$0</span>
            </div>
            <div className="mb-2">
              <div className="flex items-center">
                <input type="radio" id="bank" name="payment" className="mr-2" />
                <label htmlFor="bank" className="text-gray-700">Bank</label>
                <img className='ml-44' src='Frame.png' />
              </div>
              <div className="flex items-center mt-2">
                <input type="radio" id="cash" name="payment" className="mr-2" />
                <label htmlFor="cash" className="text-gray-700">Cash on delivery</label>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Coupon Code</span>
              <div className="flex">
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-l-lg"
                />
                <button className="bg-[#736FA1] text-white p-2 rounded-r-lg">Apply Coupon</button>
              </div>
            </div>
            <Link to="/success">
            <button className="w-full bg-[#736FA1] text-white py-2 rounded-lg mt-4">Purchase Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
