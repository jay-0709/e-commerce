import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router/Router';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
);
reportWebVitals();
