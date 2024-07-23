import axios from "axios";
import { toast } from "react-toastify";

export async function getAllCart() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}cart/all`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
}
