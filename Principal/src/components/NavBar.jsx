import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="p-6 bg-black text-white flex justify-between items-center">
      {/* IZQUIERDA */}
      <Link to="/" className="font-bold text-xl">
        Perishop
      </Link>

      {/* DERECHA */}
      <div className="flex items-center gap-6">
        <Link to="/category/teclado">Teclados</Link>
        <Link to="/category/mouse">Mouse</Link>
        <Link to="/category/auriculares">Auriculares</Link>
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
