import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="relative">
      🛒
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
          {totalQuantity}
        </span>
      )}
    </Link>
  )
}

export default CartWidget
