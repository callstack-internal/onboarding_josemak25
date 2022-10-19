import { create } from "apisauce";

const BASE_URL = "";

export const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
