/*import { useEffect, useState } from "react";
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
            <p><span className="negrita">Area:</span> {person.area}</p>
            <p><span className="negrita">Departamento:</span> {person.departamento}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default App;
*/
import { useEffect, useState } from "react";
import * as api from "./api";

const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [departamento, setDepartamento] = useState("");
  const [lugar, setLugar] = useState("");
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
      setError("");
    } catch (error) {
      setError("No se pudieron cargar los datos.");
    }
  };

  useEffect(() => {
    fetchPersons(sortOrder);
  }, [sortOrder]);

  const filteredPersons = persons.filter(person => {
    const matchDepartamento = departamento ? person.departamento === departamento : true;
    const matchLugar = lugar ? person.lugar === lugar : true;
    return matchDepartamento && matchLugar;
  });

  // Extraer opciones únicas
  const lugaresUnicos = Array.from(new Set(persons.map(p => p.lugar)));
  const departamentosUnicos = Array.from(new Set(persons.map(p => p.departamento)));

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">Lista de Personas</h1>

      <label>Ordenar por: </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="default">Por defecto</option>
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
      </select>

      <label>Filtrar por departamento: </label>
      <select value={departamento} onChange={(e) => setDepartamento(e.target.value)}>
        <option value="">Todos</option>
        {departamentosUnicos.map(dep => (
          <option key={dep} value={dep}>{dep}</option>
        ))}
      </select>

      <label>Filtrar por lugar: </label>
      <select value={lugar} onChange={(e) => setLugar(e.target.value)}>
        <option value="">Todos</option>
        {lugaresUnicos.map(lug => (
          <option key={lug} value={lug}>{lug}</option>
        ))}
      </select>
      <button onClick={() => { setDepartamento(""); setLugar(""); }}>
        Limpiar filtros
    </button>


      <div className="contenedor">
        {filteredPersons.length === 0 ? (
            <p>No se encontraron resultados con los filtros aplicados.</p>
          ) : (
          filteredPersons.map((person) => (
            <div key={person.id} className="tarjeta">
              <h1>{person.nombre}</h1>
              <p><span className="negrita">Teléfono:</span> {person.telefono}</p>
              <p><span className="negrita">Email:</span> {person.email}</p>
              <p><span className="negrita">Lugar:</span> {person.lugar}</p>
              <p><span className="negrita">Área:</span> {person.puesto}</p>
              <p><span className="negrita">Departamento:</span> {person.departamento}</p>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default App;
