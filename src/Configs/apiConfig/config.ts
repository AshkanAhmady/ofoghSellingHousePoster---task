import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "./api.endpoint";

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

http.interceptors.response.use(
  (response) => {
    return response.data;
  },

  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      toast.error(`${response.data}`);
    }
  }
);

export default http;
