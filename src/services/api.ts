import axios from 'axios';

const api = axios.create({
    baseURL: "https://192.185.176.201:3333",
});

export default api;
