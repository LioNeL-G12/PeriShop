import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext)
  const [added, setAdded] = useState(false)

  const handleAdd = (quantity) => {
    addItem(item, quantity)
    setAdded(true)
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-80 object-cover rounded"
      />

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">{item.title}</h2>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-3xl font-semibold">${item.price}</p>

        {!added ? (
          <ItemCount stock={item.stock} onAdd={handleAdd} />
        ) : (
          <Link
            to="/cart"
            className="bg-blue-600 text-white text-center py-2 rounded"
          >
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  )
}

export default ItemDetail
