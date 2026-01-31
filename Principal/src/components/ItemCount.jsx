import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <button
          onClick={() => count > 1 && setCount(count - 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          -
        </button>

        <span className="text-xl">{count}</span>

        <button
          onClick={() => count < stock && setCount(count + 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => onAdd(count)}
        className="bg-green-600 text-white py-2 rounded"
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount
