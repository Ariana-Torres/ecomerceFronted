import { useState, useEffect } from "react";

export const Countrys = () => {
  const [countrys, setCountrys] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "Countrys";

  const getCountrys = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setCountrys(data);
  };

  useEffect(() => {
    getCountrys();
  }, []);

  return (
    <div>
      <h1 className="text-primary">Lista de Marcas</h1>
      <ul  className="categorias">
        {countrys.map((item) => (
          <li className="li" key={item.id}>
            <h3 id="name" className="text-danger">{item.name}</h3>
          </li>
        ))}
      
      </ul>
    </div>
  );
};