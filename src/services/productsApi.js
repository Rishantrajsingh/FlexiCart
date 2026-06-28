import axios from "axios";
import api from "./api";

export const getProducts = async (endpoint) => {
  const res = await api.get(endpoint);
  return res.data;
};
