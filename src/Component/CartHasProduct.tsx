import { cartType } from "@/Utils/type";
import React, { useState } from "react";
import RedButton from "./Button/RedButton";

const CartHasProduct = ({
  indexCart,
  allCart,
  Element,
}: {
  indexCart: number;
  allCart: cartType[];
  Element: any;
}) => {
  const [value, setValue] = useState<number>(1);
  const [styleMaxValue, setStyleMaxValue] = useState<string>("");

  return (
    <div key={Element.id} className="bg-black w-66 rounded-[45px] mt-6 py-4">
      <h3 className="text-2xl text-center">{allCart[indexCart].name}</h3>
      <div className="grid grid-cols-3 px-4 justify-center">
        <div className="col-span-1">
          <img
            src={Element.product.image}
            className="rounded-[45px] h-32 object-cover"
          />
        </div>
        <div className="col-span-2 justify-self-center">
          <div className="w-40 h-20 flex justify-center items-center bg-white text-black rounded-[45px]">
            <p>{Element.product.description}</p>
          </div>
          <div className="flex justify-between items-center gap-4 bg-white text-black px-2 rounded-xl m-0.5">
            <button
              className="md:text-2xl"
              onClick={() => {
                if (value > 1) {
                  setValue(value - 1);
                  setStyleMaxValue("");
                } else {
                  setStyleMaxValue("text-red-700");
                }
              }}
            >
              -
            </button>
            <p className={`${styleMaxValue} md:text-xl`}>{value}</p>
            <button
              className="md:text-2xl"
              onClick={() => {
                if (value < Element.product.quantity) {
                  setValue(value + 1);
                  setStyleMaxValue("");
                } else {
                  setStyleMaxValue("text-red-700");
                }
              }}
            >
              +
            </button>
          </div>
          <div>
            <p className="text-center">
              {(value * Element.product.price).toFixed(2)} $
            </p>
          </div>
          <RedButton text={"Remove"} />
        </div>
      </div>
    </div>
  );
};

export default CartHasProduct;
