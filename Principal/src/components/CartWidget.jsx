import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
  return (
    <div className="relative cursor-pointer">
    <ShoppingCart size={28} />
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
        3
    </span>
    </div>
  );
};

export default CartWidget;
