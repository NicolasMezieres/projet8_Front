import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import WhiteButton from "../Button/WhiteButton";
import CartButton from "./cartButton";

const Header = ({
  isAdmin,
  styleButton1,
  styleButton2,
  styleButton3,
}: {
  isAdmin: boolean;
  styleButton1: string;
  styleButton2: string;
  styleButton3: string;
}) => {
  const { push } = useRouter();
  return (
    <div className="HeaderBG px-4 md:px-16 xl:px-40">
      <header className="w-full flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex gap-5">
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
        <div onClick={() => push("/sign")} className="cursor-pointer">
          <WhiteButton
            additionalCss="DropShadowButton GrayBGHover"
            text={"Log Out"}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
