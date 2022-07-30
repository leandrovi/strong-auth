import axios from "axios";

const baseURL = "https://auth.conferenciaflores.com.br";

export const api = axios.create({
  baseURL,
});
