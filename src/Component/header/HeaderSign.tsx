import React from "react";
import Logo from "./Logo";

const HeaderSign = () => {
  return (
    <div className="HeaderBG md:px-16 xl:px-40">
      <header className="w-full flex justify-center items-center">
        <Logo />
      </header>
    </div>
  );
};

export default HeaderSign;
