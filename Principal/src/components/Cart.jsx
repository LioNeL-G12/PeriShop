import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const Cart = () => {
  const {
    cart,
    clearCart,
    totalQuantity,
    totalPrice
  } = useContext(CartContext)

  const [orderCompleted, setOrderCompleted] = useState(false)

  const handleFinish = () => {
    setOrderCompleted(true)
    clearCart()
  }

  if (cart.length === 0 && !orderCompleted) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl mb-4">El carrito está vacío</h2>
        <Link to="/" className="text-blue-600 underline">
          Volver a la tienda
        </Link>
      </div>
    )
  }

  if (orderCompleted) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-4">
          ¡Compra realizada con éxito!
        </h2>
        <p className="mb-2">Gracias por tu compra.</p>
        <Link to="/" className="text-blue-600 underline">
          Volver a la tienda
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Carrito</h2>

      <div className="flex flex-col gap-4">
        {cart.map(prod => (
          <CartItem key={prod.id} item={prod} />
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">
          Total productos: <span className="font-bold">{totalQuantity}</span>
        </h3>
        <h3 className="text-2xl font-bold">
          Total: <span className="text-green-600">${totalPrice}</span>
        </h3>

        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Vaciar carrito
          </button>

          <button
            onClick={handleFinish}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
