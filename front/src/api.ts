


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

export const getPersonsDepComercial = async () => {
  const response = await axios.get(`${API_URL}/DepComercial`);
  return response.data;
  
};

export const getPersonsLugarGranCanaria = async () => {
  const response = await axios.get(`${API_URL}/LugarGranCanaria`);
  return response.data;
  
};

export const getPersonsComercialesGranCanaria = async () => {
  const response = await axios.get(`${API_URL}/ComecialesGranCanaria`);
  return response.data;
  
};
