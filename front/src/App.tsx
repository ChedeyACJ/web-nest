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
      <div>
       <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="negrita">Nombre</th>
              <th className="negrita">Teléfono</th>
              <th className="negrita">Email</th>
              <th className="negrita">Lugar</th>
              <th className="negrita">Puesto</th>
              <th className="negrita">Departamento</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person) => (
              <tr key={person.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{person.nombre}</td>
                <td className="border border-gray-300 px-4 py-2">{person.telefono}</td>
                <td className="border border-gray-300 px-4 py-2">{person.email}</td>
                <td className="border border-gray-300 px-4 py-2">{person.lugar}</td>
                <td className="border border-gray-300 px-4 py-2">{person.puesto}</td>
                <td className="border border-gray-300 px-4 py-2">{person.departamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
  
};

export default App;
