import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id)

      if (existing) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        )
      }

      return [...prev, item]
    })
  }

  function removeItem(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const getTotalQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotal,
        getTotalQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
