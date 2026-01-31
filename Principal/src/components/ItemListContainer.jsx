import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router-dom"
import { db } from "../Firebase/config"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const productsRef = collection(db, "products")

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef

    getDocs(q).then(snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProducts(items)
    })
  }, [categoryId])

  return (
    <div className="p-6">
      {greeting && <h2 className="text-2xl mb-4">{greeting}</h2>}
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
