import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:7117/api",
    headers: {"Contect-type": "application/json"}
});

export default api;