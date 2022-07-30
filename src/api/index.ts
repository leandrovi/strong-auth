import axios from "axios";

const baseURL = "https://dfmsuhz45gk0a.cloudfront.net";

export const api = axios.create({
  baseURL,
});
