import React from 'react'
import AppContext from '../context'

export const useCart = () => {
  const { cartItems, setCartItems } = React.useContext(AppContext)
  const totalPrice = cartItems.reduce((accum, obj) => accum + obj.price, 0)

  return { cartItems, setCartItems, totalPrice }
}
