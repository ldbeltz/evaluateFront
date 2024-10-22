import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 3600,
}); 

export default instance;