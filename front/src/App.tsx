import { useEffect, useState } from "react";
import { getPersons, getPersonsAZ, getPersonsZA } from "./api";
import { Person } from "./types";
import "./style/App.css";
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
      <h1>Lista de Personas</h1>

      <label>Ordenar por: </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="default">Por defecto</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr key={person.id}>
                <td>{person.nombre}</td>
                <td>{person.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
