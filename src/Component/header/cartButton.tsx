import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const CartButton = ({ additionalCss }: { additionalCss?: string }) => {
  const { push } = useRouter();
  return (
    <div
      className="flex justify-center"
      onClick={() => {
        push("/cart");
      }}
    >
      <div
        className={`${additionalCss} bg-white text-black px-3 md:px-4 md:py-2 rounded-3xl flex justify-center items-center transition duration-300`}
      >
        <BsFillCartFill className="text-base md:text-xl xl:text-2xl" />
      </div>
    </div>
  );
};

export default CartButton;
