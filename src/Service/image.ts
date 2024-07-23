import axios from "axios";
import { toast } from "react-toastify";

export async function upload(image: FormData) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}image/upload`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, image, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
}
