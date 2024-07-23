import { signinType, signupFormType } from "@/Utils/type";
import axios from "axios";
import { toast } from "react-toastify";

export async function Signup(data: signupFormType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;
  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
  };
  return axios
    .post(url, { ...data }, axiosConfig)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
}
export async function Signin(data: signinType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;
  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
    },
  };
  return axios
    .post(url, { ...data }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
}
