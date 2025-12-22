import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">
        PeriShop
      </Link>

      {/* Links */}
      <ul className="flex gap-6 text-lg">
        <li>
          <Link to="/" className="hover:text-gray-400">Inicio</Link>
        </li>
        <li>
          <Link to="/category/teclados" className="hover:text-gray-400">Teclados</Link>
        </li>
        <li>
          <Link to="/category/mouse" className="hover:text-gray-400">Mouse</Link>
        </li>
        <li>
          <Link to="/category/auriculares" className="hover:text-gray-400">Auriculares</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
