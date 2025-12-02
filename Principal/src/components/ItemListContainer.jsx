import products from "../data/products.json"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="p-6">
      <h2 className="text-3xl mb-6">{greeting}</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((item) => (
          <div 
            key={item.id} 
            className="w-100 border p-4 rounded-xl shadow flex flex-col items-center text-center"
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="mb-3 w-200 h-70 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemListContainer
