


import axios from "axios";
import { Person } from "./types";

const API_URL = "http://localhost:3000/personas";

export const getPersons = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPersonsAZ = async () => {
  const response = await axios.get(`${API_URL}/az`);
  return response.data;
};

export const getPersonsZA = async () => {
  const response = await axios.get(`${API_URL}/za`);
  return response.data;
};
