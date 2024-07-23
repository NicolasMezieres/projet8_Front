import { categoryFormType } from "@/Utils/type";
import axios from "axios";
import { toast } from "react-toastify";

export async function getAllCategory() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/all`;
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
      return e;
    });
}

export async function searchCategory(name: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/search/${name}`;
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
export async function insertCategory(data: categoryFormType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/new`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
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

export async function updateCategory(data: categoryFormType) {
  console.log(data, "la");
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/update`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(url, { ...data }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
export async function removeCategory(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}category/delete/${id}`;
  let axiosConfig = {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
