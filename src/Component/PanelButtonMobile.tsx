import React from "react";
import WhiteButton from "./Button/WhiteButton";
import CartButton from "./header/cartButton";
import ModalAddProduct from "./Modal/ModalAddProduct";
import { useRouter } from "next/navigation";

const PanelButtonMobile = ({
  styleButton1,
  styleButton2,
  styleButton3,
  isAdmin,
}: {
  styleButton1: string;
  styleButton2: string;
  styleButton3: string;
  isAdmin: boolean;
}) => {
  const { push } = useRouter();
  return (
    <div className="flex justify-center pt-4 gap-5 md:hidden">
      <div
        onClick={() => {
          push("/home");
        }}
      >
        <WhiteButton additionalCss={styleButton1} text={"Home"} />
      </div>
      {isAdmin && (
        <div
          onClick={() => {
            push("/category");
          }}
        >
          <WhiteButton additionalCss={styleButton2} text={"Category"} />
        </div>
      )}
      <CartButton additionalCss={styleButton3} />
    </div>
  );
};

export default PanelButtonMobile;
