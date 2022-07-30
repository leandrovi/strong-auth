import axios from "axios";

const baseURL = "https://auth.movimentoflores.com.br";

export const api = axios.create({
  baseURL,
});
