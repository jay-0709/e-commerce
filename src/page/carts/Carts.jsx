import React from 'react';
import {Link } from 'react-router-dom'
import { useCartContext } from '../../contexts/CartContext';
import CartNavbar from './CartNavbar';
import CartRoute from './CartRoute';

const Carts = () => {
  const { cartItems } = useCartContext();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  return (
    <div>
        <CartNavbar />
        <CartRoute />
    <div className="container mx-auto p-4">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="flex justify-between border-b pb-4 mb-4">
            <h2 className="font-bold text-xl">Product</h2>
            <h2 className="font-bold text-xl">Price</h2>
            <h2 className="font-bold text-xl">Quantity</h2>
            <h2 className="font-bold text-xl">Subtotal</h2>
          </div>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded mr-4" />
                <p className="text-gray-700 font-semibold">{item.name}</p>
              </div>
              <p className="text-gray-700">${item.price.toLocaleString()}</p>
              <input
                type="number"
                value={item.quantity}
                className="w-16 text-center border rounded"
                readOnly
              />
              <p className="text-gray-700">${(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <div className="bg-gray-100 w-60 p-4 rounded-lg shadow-md md:w-1/3">
              <h2 className="font-bold text-lg mb-4">Cart Total</h2>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Subtotal:</span>
                <span className="text-gray-700">${calculateSubtotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Shipping:</span>
                <span className="text-gray-700">Free</span>
              </div>
              <div className="flex justify-between mb-4 border-t pt-2">
                <span className="font-bold text-lg">Total:</span>
                <span className="font-bold text-lg">${calculateSubtotal().toLocaleString()}</span>
              </div>
              <Link to="/checkout">
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
</div>

  );
};

export default Carts;