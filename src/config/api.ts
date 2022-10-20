import { create } from "apisauce";

const BASE_URL = "https://api.openweathermap.org";

export const network = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
