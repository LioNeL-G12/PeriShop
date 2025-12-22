import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="¡Bienvenido a PeriShop! Elegí tus periféricos favoritos." />
          }
        />

        <Route
          path="/category/:categoryId"
          element={<ItemListContainer />}
        />

        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer />}
        />

        <Route path="*" element={<h2 className="p-6 text-2xl">404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
