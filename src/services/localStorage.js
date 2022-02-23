import { ACCESS_TOKEN } from "../config/data";

const getToken = () => localStorage.getItem(ACCESS_TOKEN);
const setToken = (value) => localStorage.setItem(ACCESS_TOKEN, value);
const clearToken = () => localStorage.removeItem(ACCESS_TOKEN);

export { getToken, setToken, clearToken };
