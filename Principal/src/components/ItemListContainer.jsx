import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });

    getProducts.then((data) => {
      if (categoryId) {
        setItems(data.filter((item) => item.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <div className="p-6">
      {greeting && <h2 className="text-3xl mb-6">{greeting}</h2>}

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-64 border p-4 rounded-xl shadow flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="mb-3 w-full h-40 object-cover rounded-lg"
            />

            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">${item.price}</p>

            <Link
              to={`/item/${item.id}`}
              className="mt-auto bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
