// auth api's
import axios from 'axios';

const API = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}` });

export const userSignIn = (data) => API.post('place login api here', data);