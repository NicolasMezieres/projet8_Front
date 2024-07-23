"use client";
import Footer from "@/Component/Footer";
import Header from "@/Component/header/Header";
import MainTitleUser from "@/Component/mainTitleUser";
import React, { useEffect, useState } from "react";
import * as jose from "jose";
import { useRouter } from "next/navigation";
import PanelAdmin from "@/Component/PanelAdmin";
import Search from "@/Component/Search";
import { categoryType } from "@/Utils/type";
import { getAllCategory, searchCategory } from "@/Service/category";
import PanelButtonMobile from "@/Component/PanelButtonMobile";
import Categories from "@/Component/Categories";

const page = () => {
  const [search, setSearch] = useState<string>("");
  const [isReloadNeed, setIsReloadNeed] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
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
    getAllCategory().then((res) => {
      setCategoryList(res);
    });
  }, [isReloadNeed]);
  useEffect(() => {
    if (search) {
      const delay = setTimeout(() => {
        searchCategory(search).then((res) => {
          if (res?.status === 200) {
            setCategoryList(res.data);
          }
        });
      }, 500);

      return () => {
        clearTimeout(delay);
      };
    } else {
      getAllCategory().then((res) => {
        setCategoryList(res);
      });
    }
  }, [search]);
  return (
    <div>
      <Header
        isAdmin={isAdmin}
        styleButton1={"DropShadowButton GrayBGHover"}
        styleButton2={"InsetButton"}
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
          styleButton1="DropShadowButton GrayBGHover"
          styleButton2="InsetButton"
          styleButton3="DropShadowButton GrayBGHover"
        />
        <MainTitleUser />
        <Search setSearch={setSearch} text={"Search by name"} />
        <Categories
          setIsReloadNeed={setIsReloadNeed}
          categoryList={categoryList}
        />
      </main>
      <Footer />
    </div>
  );
};

export default page;
