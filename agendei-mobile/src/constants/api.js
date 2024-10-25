import axios from "axios";

const api = axios.create({
    baseURL: "http://seu-ip-aqui:3001"
});

export default api;