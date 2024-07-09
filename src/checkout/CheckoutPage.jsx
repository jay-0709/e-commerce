import React from 'react'
import CartNavbar from '../page/carts/CartNavbar'
import CheckoutRoute from './CheckoutRoute'
import CheckoutForm from './CheckoutForm'

const CheckoutPage = () => {
  return (
    <div>
        <CartNavbar />
        <CheckoutRoute />
        <CheckoutForm />
    </div>
  )
}

export default CheckoutPage