import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext)

  return (
    <div className="flex gap-4 items-center justify-between p-4 rounded-lg border shadow-sm bg-white">
      {/* IMAGEN */}
      <img
        src={item.url}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />

      {/* DATOS */}
      <div className="flex-1">
        <h4 className="font-bold text-lg">{item.title}</h4>
        <p className="text-gray-600 text-sm">{item.description}</p>

        <div className="flex gap-4 mt-2">
          <span className="text-gray-700">
            Cantidad: <span className="font-semibold">{item.quantity}</span>
          </span>
          <span className="text-gray-700">
            Subtotal:{" "}
            <span className="font-semibold">
              ${item.price * item.quantity}
            </span>
          </span>
        </div>
      </div>

      {/* BOTÓN */}
      <button
        onClick={() => removeItem(item.id)}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Eliminar
      </button>
    </div>
  )
}

export default CartItem
