import { useState } from "react"
import { CartContext } from "./CartContext"

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    setCart(prevCart => {
      const existing = prevCart.find(prod => prod.id === item.id)

      if (existing) {
        return prevCart.map(prod =>
          prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      }

      return [...prevCart, { ...item, quantity }]
    })
  }

  const removeItem = id => {
    setCart(prevCart => prevCart.filter(prod => prod.id !== id))
  }

  const clearCart = () => setCart([])

  const totalQuantity = cart.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  )

  const totalPrice = cart.reduce(
    (acc, prod) => acc + prod.quantity * prod.price,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
