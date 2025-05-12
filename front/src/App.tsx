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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {persons.map((person) => (
          <div key={person.id} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{person.nombre}</h2>
            <p className="text-gray-600">
              <span className="font-semibold">Edad:</span> {person.edad}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 border-2 border-red-500">
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Juan Pérez</h2>
            <p className="text-gray-600"><span className="font-semibold">Teléfono:</span> +34 600 123 456</p>
            <p className="text-gray-600"><span className="font-semibold">Email:</span> juan.perez@email.com</p>
            <p className="text-gray-600"><span className="font-semibold">Lugar:</span> Gran Canaria</p>
            <p className="text-gray-600"><span className="font-semibold">Puesto:</span> Técnico de Soporte</p>
            <p className="text-gray-600"><span className="font-semibold">Departamento:</span> IT</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Antonio Luján</h2>
            <p className="text-gray-600"><span className="font-semibold">Teléfono:</span> +34 700 789 012</p>
            <p className="text-gray-600"><span className="font-semibold">Email:</span> antonio.lujan@email.com</p>
            <p className="text-gray-600"><span className="font-semibold">Lugar:</span> Tenerife</p>
            <p className="text-gray-600"><span className="font-semibold">Puesto:</span> Compras</p>
            <p className="text-gray-600"><span className="font-semibold">Departamento:</span> Operaciones</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Pepe Guerra</h2>
            <p className="text-gray-600"><span className="font-semibold">Teléfono:</span> +34 800 345 678</p>
            <p className="text-gray-600"><span className="font-semibold">Email:</span> pepe.guerra@email.com</p>
            <p className="text-gray-600"><span className="font-semibold">Lugar:</span> Gran Canaria</p>
            <p className="text-gray-600"><span className="font-semibold">Puesto:</span> Comercial</p>
            <p className="text-gray-600"><span className="font-semibold">Departamento:</span> Comercial</p>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-white p-4 rounded-xl">
        ¿Tailwind funciona?
      </div>
    </div>
  );
  
};

export default App;
