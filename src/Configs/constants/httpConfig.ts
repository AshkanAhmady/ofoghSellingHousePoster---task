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
      let message: string =
        response.data === "Cannot find user"
          ? "کاربری با این ایمیل یافت نشد"
          : response.data === "Incorrect password"
          ? "رمز ورود اشتباه است"
          : response.data === "Email already exists"
          ? "کاربری با این ایمیل قبلا ثبت نام کرده است"
          : "";
      toast.error(`${message}`);
    }
  }
);

export default http;
