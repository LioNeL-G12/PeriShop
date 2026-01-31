import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const ItemCard = ({ id, name, url, price, description, category }) => {
  const { addItem } = useContext(CartContext)

  const handleAdd = () => {
    const item = {
      id,
      title: name,
      price,
      img: url,
      description,
      category
    }

    addItem(item, 1)
  }

  return (
    <div className="border rounded p-4">
      <img
        src={url}
        alt={name}
        className="h-90 w-100 object-cover mb-2"
      />

      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-xl">${price}</p>

      <div className="flex flex-col gap-2 mt-2">
        <Link
          to={`/item/${id}`}
          className="text-blue-600 underline"
        >
          Ver detalle
        </Link>

        <button
          onClick={handleAdd}
          className="bg-green-600 text-white py-1 rounded"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCard
