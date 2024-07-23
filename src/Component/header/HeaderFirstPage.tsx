import React from "react";
import Logo from "./Logo";
import ButtonHeader from "./ButtonHeader";

const HeaderFirstPage = () => {
  return (
    <div className="HeaderBG px-4 md:px-16 xl:px-40">
      <header className="w-full flex justify-between items-center">
        <Logo />
        <div className="flex gap-5 md:gap-10 xl:gap-5">
          <ButtonHeader redirection={"/sign"} text={"signup"} />
          <ButtonHeader redirection={"/sign"} text={"signin"} />
        </div>
      </header>
    </div>
  );
};

export default HeaderFirstPage;
