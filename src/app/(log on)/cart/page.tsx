"use client";
import Header from "@/Component/header/Header";
import MainTitleUser from "@/Component/mainTitleUser";
import PanelAdmin from "@/Component/PanelAdmin";
import PanelButtonMobile from "@/Component/PanelButtonMobile";
import { cartType, categoryType } from "@/Utils/type";
import React, { useEffect, useState } from "react";
import * as jose from "jose";
import { useRouter } from "next/navigation";
import { getAllCategory } from "@/Service/category";
import Footer from "@/Component/Footer";
import { getAllCart } from "@/Service/cart";
import BlueButton from "@/Component/Button/BlueButton";
import CartHasProduct from "@/Component/CartHasProduct";
const page = () => {
  const { push } = useRouter();
  const [indexCart, setIndexCart] = useState<number>();
  const [cartSelect, setCartSelect] = useState<string>();
  const [allCart, setAllCart] = useState<cartType[]>();
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
    getAllCart().then((res) => {
      setAllCart(res?.data);
    });
  }, [isReloadNeed]);
  useEffect(() => {
    if (allCart) {
      const index = allCart.findIndex((Element) => Element.id === cartSelect);
      setIndexCart(index);
    }
  }, [cartSelect]);
  return (
    <div>
      <Header
        isAdmin={isAdmin}
        styleButton1={"DropShadowButton GrayBGHover"}
        styleButton2={"DropShadowButton GrayBGHover"}
        styleButton3={"InsetButton"}
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
          styleButton3="InsetButton"
        />
        <MainTitleUser />
        <BlueButton text="Add Cart" />
        <div className="w-full flex justify-center mt-2">
          <select
            onChange={(e) => {
              setCartSelect(e.target.value);
            }}
            className="text-black GrayWhiteBG rounded-[45px]"
          >
            <option>Select your cart v</option>
            {allCart &&
              allCart.map((Element) => {
                return (
                  <option key={Element.id} value={Element.id}>
                    {Element.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="w-full GrayWithBG py-4">
          {indexCart &&
            allCart &&
            allCart[indexCart].cartHasProduct.map((Element) => {
              return (
                <CartHasProduct
                  Element={Element}
                  indexCart={indexCart}
                  allCart={allCart}
                />
              );
            })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;
