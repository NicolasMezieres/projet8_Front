import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        width={80}
        height={80}
        alt="picture of logo"
        src={"/logo.png"}
        className="w-[50px] h-[50px] rounded-[45px] md:w-20 md:h-20"
      />
      <p>Pochtron & sofa</p>
    </div>
  );
};

export default Logo;
