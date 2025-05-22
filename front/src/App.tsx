import { useEffect, useState } from "react";
import { getPersons, getPersonsAZ, getPersonsZA } from "./api";
import { Person } from "./types";


console.log("El componente App se está montando...");
const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [error, setError] = useState("");

  const fetchPersons = async (order: string) => {
    console.log("fetchPersons ejecutado con orden:", order); // NUEVO LOG

    try {
      let data: Person[];
      if (order === "az") data = await getPersonsAZ();
      else if (order === "za") data = await getPersonsZA();
      else data = await getPersons();


      console.log("Datos recibidos:", data);
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
        </select>
      </div>
      <div className="">
        {persons.map((person) => (
          <div key={person.id}>
            <h2>{person.nombre}</h2>
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