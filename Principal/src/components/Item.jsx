import { Link } from "react-router-dom"

const Item = ({ id, name, price, url }) => {
  return (
    <div className="border rounded p-4">
      <img src={url} alt={name} className="h-40 mx-auto" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p>${price}</p>

      <Link
        to={`/item/${id}`}
        className="inline-block mt-2 text-blue-500"
      >
        Ver detalle
      </Link>
    </div>
  )
}

export default Item
