import axios from "axios";
import { toast } from "react-toastify";

export async function getAllUser(search?: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}user/search?search=${search}`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(url, axiosConfig)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
}
