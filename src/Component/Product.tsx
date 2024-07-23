import { categoryType, productType } from "@/Utils/type";
import Image from "next/image";
import React, { useState } from "react";
import BlueButton from "./Button/BlueButton";
import AddButton from "./Button/AddButton";
import RedButton from "./Button/RedButton";
import { deleteProduct } from "@/Service/product";
import ModalUpdateProduct from "./Modal/ModalUpdateProduct";
import { toast } from "react-toastify";

const Product = ({
  product,
  isAdmin,
  setIsReloadNeed,
  categoryList,
}: {
  product: productType;
  isAdmin: boolean;
  setIsReloadNeed: React.Dispatch<React.SetStateAction<boolean>>;
  categoryList: categoryType[];
}) => {
  const [value, setValue] = useState<number>(1);
  async function handleButtonDelete() {
    deleteProduct(product.id).then((res) => {
      console.log(res);
      if (res?.status === 200) {
        toast.success(res.data.message);
        setIsReloadNeed(true);
      }
    });
  }
  return (
    <div className="bg-black md:w-60 xl:w-[300px] flex justify-center rounded-3xl py-4">
      <div className=" flex flex-col gap-3 items-center md:w-44 xl:w-64 ">
        <Image
          width={500}
          height={500}
          src={product.image}
          alt={`image of ${product.title}`}
          className="rounded-3xl w-28 h-16 md:w-44 md:h-28 xl:w-full xl:h-32 object-cover"
        />
        <h2 className="text-center w-28 md:w-44 xl:w-full md:text-xl xl:text-2xl">
          {product.title}
        </h2>
        <div className="bg-white text-black text-xs md:text-base md:max-w-44 md:max-h-12 xl:max-w-64 xl:max-h-20 flex justify-center items-center text-center rounded-3xl py-1 px-5">
          <p className="text-xs md:text-base max-w-20 max-h-12 md:max-w-36 md:max-h-12 xl:max-w-56 xl:max-h-20 overflow-y-auto">
            {product.description}
          </p>
        </div>
        <p className="md:text-txl xl:text-2xl">{product.category.name}</p>
        <p className="md:text-txl xl:text-2xl">stock: {product.quantity}</p>
        <div className="flex justify-between items-center gap-4 bg-white text-black px-2 rounded-xl m-0.5">
          <button
            className="md:text-2xl"
            onClick={() => {
              if (value > 1) {
                setValue(value - 1);
              }
            }}
          >
            -
          </button>
          <p className="md:text-xl">{value}</p>
          <button
            className="md:text-2xl"
            onClick={() => {
              if (value < product.quantity) {
                setValue(value + 1);
              }
            }}
          >
            +
          </button>
        </div>
        <p className="md:text-txl xl:text-2xl">
          {(value * product.price).toFixed(2)} $
        </p>
        <AddButton text={"Add"} />
        {isAdmin && (
          <div className="flex gap-2">
            <ModalUpdateProduct
              product={product}
              categoryList={categoryList}
              setIsReloadNeed={setIsReloadNeed}
            />
            <div onClick={handleButtonDelete}>
              <RedButton text={"Delete"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
