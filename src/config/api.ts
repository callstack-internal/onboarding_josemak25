import { create } from "apisauce";
import { BASE_URL } from "@env";

export const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
