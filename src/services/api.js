import axios from "axios";

const api = axios.create({
  baseURL: "https://capstone-m3-db.herokuapp.com/",
});

export default api;
