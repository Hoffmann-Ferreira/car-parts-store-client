import axios from "axios";

export const api = axios.create({
  baseURL: "https://car-parts-store-api.herokuapp.com",
});
