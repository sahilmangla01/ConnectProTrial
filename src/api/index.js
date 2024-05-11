import axios from 'axios';

export const REACT_URL = axios.create({
  baseURL: `${process.env.API_URL}`,
});
