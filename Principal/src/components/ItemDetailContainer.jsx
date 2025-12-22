import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === Number(itemId)));
      }, 1000);
    });

    getProduct.then((data) => setItem(data));
  }, [itemId]);

  return item && <ItemDetail {...item} />;
};

export default ItemDetailContainer;
