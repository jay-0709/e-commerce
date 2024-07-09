import React from 'react';
import { useCartContext } from '../../contexts/CartContext';

const Arrivals = () => {
  const { addToCart } = useCartContext();

    const products = [
      { id: 1, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product1.jpg" },
      { id: 2, name: "Gefute", description: "A full white outfit", price: "359,000 USD", image: "product2.jpg" },
      { id: 3, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product3.jpg" },
      { id: 4, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product4.jpg" },
      { id: 5, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product5.jpg" },
      { id: 6, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product6.png" },
      { id: 7, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product8.jpg" },
      { id: 8, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product7.jpg" },
      { id: 9, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product9.jpg" },
      { id: 10, name: "Fille", description: "A black coat feathered dress", price: "302,000 USD", image: "product10.jpg" },
    ]

  return (
    <>
      <div className='mt-8 text-center'>
        <div>
          <h2 className='font-italianno text-[30px]'>Giovanu<span className='font-inter'> Arrivals</span></h2>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 sm:grid-cols-1 gap-4 mt-4'>
        {products.map(product => (
          <div key={product.id} className='bg-white rounded-lg shadow-md text-center p-4'>
            <img src={product.image} alt={product.name} className='w-full h-40 object-cover rounded-md mb-4' />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg font-semibold">{product.price}</p>
            <div className='items-center justify-center'>
              <button 
                onClick={() => addToCart(product)}
                className="w-[55%] text-[10px] px-4 py-4 text-white font-[15px] bg-indigo-600 rounded-lg">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Arrivals;