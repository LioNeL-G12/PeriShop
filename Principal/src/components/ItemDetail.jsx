import ItemCount from "./ItemCount";

const ItemDetail = ({ name, image, price, stock }) => {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-80 rounded-lg mb-4" />
      <h2 className="text-3xl font-bold">{name}</h2>
      <p className="text-xl my-2">${price}</p>

      <ItemCount stock={stock} />
    </div>
  );
};

export default ItemDetail;
