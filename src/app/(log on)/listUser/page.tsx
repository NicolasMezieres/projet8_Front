"use client";
import Header from "@/Component/header/Header";
import MainTitleUser from "@/Component/mainTitleUser";
import PanelAdmin from "@/Component/PanelAdmin";
import PanelButtonMobile from "@/Component/PanelButtonMobile";
import React, { useEffect, useState } from "react";
import * as jose from "jose";
import { useRouter } from "next/navigation";
import { getAllCategory } from "@/Service/category";
import { categoryType, userType } from "@/Utils/type";
import { getAllUser } from "@/Service/user";
import Search from "@/Component/Search";

const page = () => {
  const { push } = useRouter();
  const [userList, setUserList] = useState<userType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [categoryList, setCategoryList] = useState<categoryType[]>([]);
  const [isReloadNeed, setIsReloadNeed] = useState<boolean>(false);
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
    const delay = setTimeout(() => {
      getAllUser(search).then((res) => {
        setUserList(res);
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
        styleButton1={"DropShadowButton GrayBGHover"}
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
          styleButton1="DropShadowButton GrayBGHover"
          styleButton2="DropShadowButton GrayBGHover"
          styleButton3="DropShadowButton GrayBGHover"
        />
        <MainTitleUser />
        <Search text={"Search"} setSearch={setSearch} />
        <div className="text-black mt-4">
          <table>
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Age</th>
                <th>IsActive</th>
              </tr>
            </thead>
            <tbody>
              {userList &&
                userList.map((Element) => {
                  return (
                    <tr key={Element.email}>
                      <th>{Element.firstname}</th>
                      <th>{Element.lastname}</th>
                      <th>{Element.email}</th>
                      <th>{Element.age}</th>
                      <th>{String(Element.isActive)}</th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default page;
