import { useEffect, useState } from "react";
import * as api from "./api";



const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [error, setError] = useState("");

  const fetchPersons = async (order: string) => {

    try {
      let data: Person[];
      if (order === "az") data = await api.getPersonsAZ();
      else if (order === "za") data = await api.getPersonsZA();
      else if (order === "DepComercial") data = await api.getPersonsDepComercial();
      else if (order === "LugarGranCanaria") data = await api.getPersonsLugarGranCanaria();
      else if (order === "ComecialesGranCanaria") data = await api.getPersonsComercialesGranCanaria();
      else data = await api.getPersons();


      setPersons(data);
      setError(""); // Limpiar errores si la petición es exitosa
    } catch (error) {
      setError("No se pudieron cargar los datos.");
    }
  };

  useEffect(() => {
    fetchPersons(sortOrder);
  }, [sortOrder]);

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-blue-600">Lista de Personas</h1>
        <label>Ordenar por: </label>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="default">Por defecto</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="DepComercial">Departamento Comercial</option>
          <option value="LugarGranCanaria">Gran Canaria</option>
          <option value="ComecialesGranCanaria">Comerciales de Gran Canaria</option>
        </select>
      </div>
      <div className="contenedor">
        {persons.map((person) => (
          <div key={person.id} className="tarjeta">
            <h1>{person.nombre}</h1>
            <p><span className="negrita">Teléfono:</span> {person.telefono}</p>
            <p><span className="negrita">Email:</span> {person.email}</p>
            <p><span className="negrita">Lugar:</span> {person.lugar}</p>
            <p><span className="negrita">Puesto:</span> {person.puesto}</p>
            <p><span className="negrita">Departamento:</span> {person.departamento}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default App;