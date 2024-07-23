import { productFormType, productType, productUpdateType } from "@/Utils/type";
import axios from "axios";
import { headers } from "next/headers";
import { toast } from "react-toastify";

export async function getAllProduct() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/all?category=&minPrice=3&maxPrice=t&title=`;
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

export async function insertProduct(data: productFormType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/create`;
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
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

export async function updateProduct(data: productUpdateType) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/update`;
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(url, { ...data }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message[0]);
    });
}

export async function deleteProduct(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/delete/${id}`;
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      toast.error(e.response.data.message);
    });
}
export async function searchProduct(search: string, category?: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}product/search/${search}?category=${category}`;
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
  if (search) {
    return axios
      .get(url, axiosConfig)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }
}
