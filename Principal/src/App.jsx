import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a PeriShop! Elegí tus periféricos favoritos." />
    </>
  );
}

export default App;
