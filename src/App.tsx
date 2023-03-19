import { useEffect, useState } from "react";
import { Nav } from "./components/nav/Nav";
import { Countrys } from "./components/Countrys";
import { Genero } from "./components/Genero";
import { Marca } from "./components/Marca";
import { Categorias } from "./components/Categorias";

function App() {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Nav/>
      <Countrys/>
      <Genero/>
      <Marca/>
      <Categorias/>
    </div>
  );
}

export default App;
