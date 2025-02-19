import axios from "axios";
import { Person } from "./types";

const API_URL = "http://localhost:3000/personas";

export const getPersons = async (): Promise<Person[]> => {
  try {
    const { data } = await axios.get<Person[]>(API_URL);
    return data;
  } catch (error) {
    console.error("Error al obtener personas:", error);
    throw error;
  }
};

export const getPersonsAZ = async (): Promise<Person[]> => {
  try {
    const { data } = await axios.get<Person[]>(`${API_URL}/az`);
    return data;
  } catch (error) {
    console.error("Error al obtener personas ordenadas A-Z:", error);
    throw error;
  }
};

export const getPersonsZA = async (): Promise<Person[]> => {
  try {
    const { data } = await axios.get<Person[]>(`${API_URL}/za`);
    return data;
  } catch (error) {
    console.error("Error al obtener personas ordenadas Z-A:", error);
    throw error;
  }
};
