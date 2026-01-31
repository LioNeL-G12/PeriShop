import { useEffect, useState, useContext } from "react"
import { doc, getDoc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from "../Firebase/config"
import { CartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [added, setAdded] = useState(false)
  const { itemId } = useParams()
  const { addItem } = useContext(CartContext)

  useEffect(() => {
    const docRef = doc(db, "products", itemId)

    getDoc(docRef).then(snapshot => {
      setProduct({ id: snapshot.id, ...snapshot.data() })
    })
  }, [itemId])

  if (!product) return <p>Cargando...</p>

  const handleAdd = (quantity) => {
    addItem(product, quantity)
    setAdded(true)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl mb-2">{product.name}</h2>

      <img
        src={product.url}
        alt={product.name}
        className="h-64 mb-4 w-full object-cover rounded"
      />

      <p>{product.description}</p>
      <p className="text-xl mt-2">${product.price}</p>

      {!added ? (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      ) : (
        <Link
          to="/cart"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded"
        >
          Ir al carrito
        </Link>
      )}
    </div>
  )
}

export default ItemDetailContainer
