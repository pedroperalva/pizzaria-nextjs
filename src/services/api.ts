import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "",
    headers: {
      Authorization: `Bearer ${cookies["@nextauth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        // Qualquer erro 401 (não autorizado) devemos deslogar o usuario
        if (typeof window !== undefined) {
          //Chamar a função para deslogar o usuario
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
    }
  );
}
