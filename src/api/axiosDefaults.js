import axios from "axios";
axios.defaults.baseURL = "https://voyage-backend-e8a4f1be604a.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();