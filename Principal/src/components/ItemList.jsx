import ItemCard from "./ItemCard"

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return <p>No hay productos</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(prod => (
        <ItemCard key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default ItemList
