import axios from 'axios';

// const api = axios.create({
//     baseURL: "https://localhost:7117/api",
//     headers: {"Contect-type": "application/json"}
// });

export default axios.create({
  baseURL: "http://localhost:4000", // now hitting the mock Express API
});

//export default api;