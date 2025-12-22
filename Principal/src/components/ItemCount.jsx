import { useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <div className="flex gap-4 items-center">
        <button
          onClick={() => count > 1 && setCount(count - 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          -
        </button>

        <span className="text-lg">{count}</span>

        <button
          onClick={() => count < stock && setCount(count + 1)}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          +
        </button>
      </div>

      <p className="text-sm text-gray-600">Stock disponible: {stock}</p>
    </div>
  );
};

export default ItemCount;
