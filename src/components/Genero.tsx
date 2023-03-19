import { useState, useEffect } from "react";

export const Genero = () => {
  const [genero, setGenero] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "genero";

  const getCountrys = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setGenero(data);
  };

  useEffect(() => {
    getCountrys();
  }, []);

  return (
    <div>
      <h1>Genero</h1>
      <ul>
        {genero.map((item) => (
          <li key={item.id}>
            <a>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
