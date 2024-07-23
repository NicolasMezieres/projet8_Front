"use client";
import Footer from "@/Component/Footer";
import Header from "@/Component/header/Header";
import MainTitleUser from "@/Component/mainTitleUser";
import React, { useEffect, useState } from "react";
import * as jose from "jose";
import { useRouter } from "next/navigation";
import PanelAdmin from "@/Component/PanelAdmin";
import Search from "@/Component/Search";
import { getAllProduct, searchProduct } from "@/Service/product";
import { categoryType, productType } from "@/Utils/type";
import ProductList from "@/Component/ProductList";
import { getAllCategory } from "@/Service/category";
import CategoryList from "@/Component/CategoryList";
import PanelButtonMobile from "@/Component/PanelButtonMobile";

const page = () => {
  const [categorySelect, setCategorySelect] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [isReloadNeed, setIsReloadNeed] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [productList, setProductList] = useState<productType[]>([]);
  const [categoryList, setCategoryList] = useState<categoryType[]>([]);
  const { push } = useRouter();
  useEffect(() => {
    setIsReloadNeed(false);
    const token = window.localStorage.getItem("token");
    if (token) {
      const jwt = jose.decodeJwt(token);
      if (jwt.role) {
        if (jwt.role === "Admin") {
          setIsAdmin(true);
        }
      } else {
        window.localStorage.removeItem("token");
        push("/sign");
      }
    } else {
      push("/sign");
    }
    getAllProduct().then((res) => {
      setProductList(res);
    });
    getAllCategory().then((res) => {
      setCategoryList(res);
    });
  }, [isReloadNeed]);
  useEffect(() => {
    const delay = setTimeout(() => {
      searchProduct(search).then((res) => {
        if (res?.status === 200) {
          setProductList(res.data);
        }
      });
    }, 500);

    return () => {
      clearTimeout(delay);
    };
  }, [search]);
  return (
    <div>
      <Header
        isAdmin={isAdmin}
        styleButton1={"InsetButton"}
        styleButton2={"DropShadowButton GrayBGHover"}
        styleButton3={"DropShadowButton GrayBGHover"}
      />
      <main className="min-h-screen bg-white px-4 pb-8 md:px-16 xl:px-40">
        {isAdmin && (
          <PanelAdmin
            setIsReloadNeed={setIsReloadNeed}
            categoryList={categoryList}
          />
        )}
        <PanelButtonMobile
          isAdmin={isAdmin}
          styleButton1="InsetButton"
          styleButton2="DropShadowButton GrayBGHover"
          styleButton3="DropShadowButton GrayBGHover"
        />
        <MainTitleUser />
        <Search setSearch={setSearch} text={"Search by name"} />
        <div className="my-4 md:py-8 md:px-10 grid GrayWhiteBG grid-cols-2 xl:grid-cols-3 rounded-xl h-[500px] md:h-[550px] xl:h-[700px]">
          <div className="relative z-10">
            <CategoryList categoryList={categoryList} />
          </div>
          <div className="w-full flex justify-center md:justify-end col-span-1 xl:col-span-2">
            <ProductList
              categoryList={categoryList}
              setIsReloadNeed={setIsReloadNeed}
              productList={productList}
              isAdmin={isAdmin}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
