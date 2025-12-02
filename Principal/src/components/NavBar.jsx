import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer">
        PeriShop
      </h1>

      {/* Links */}
      <ul className="flex gap-6 text-lg">
        <li className="cursor-pointer hover:text-gray-400">Inicio</li>
        <li className="cursor-pointer hover:text-gray-400">Periféricos</li>
        <li className="cursor-pointer hover:text-gray-400">Ofertas</li>
        <li className="cursor-pointer hover:text-gray-400">Contacto</li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
