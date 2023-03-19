import { useState, useEffect } from "react";

export const Countrys = () => {
  const [countrys, setCountrys] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "countrys";

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
      <h1>Paices</h1>
      <ul>
        {countrys.map((item) => (
          <li key={item.id}>
            <a>{item.name}</a>
          </li>
        ))}
    
      </ul>
    </div>
  );
};