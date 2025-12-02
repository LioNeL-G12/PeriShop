import NavBar from "./components/navbar";
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
