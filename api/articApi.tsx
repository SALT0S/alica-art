import axios from "axios";

const articApi = axios.create({
  baseURL: "https://api.artic.edu/api/v1/",
});

export default articApi;
